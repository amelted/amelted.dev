import express, { Request, Response, request, response } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import fs, {readFileSync} from 'fs'
const app = express()
let middleware = (req: Request, res: Response, next: Function) => {
    
    
    if(req.get('host') == "lol.amelted.dev"){
        if(req.originalUrl.includes("assets")){
            if(!fs.existsSync(`./static/lol/assets/motivational${req.originalUrl.slice(20,22)}.png`)){
                res.end(); 
                next();return;
            }
               
            res.send(readFileSync(`./static/lol/assets/motivational${req.originalUrl.slice(20,22)}.png`))
            res.end(); 
            next();return;
        }  
        res.send(readFileSync('./static/lol/index.html', 'utf-8'))
        res.end();
    }
    next();
}
app.all("*", middleware);
app.use(express.static("./static/"));
app.all("*", (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
})


const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, app).listen(443, () =>{
    console.log("443 listening!")
})
const httpApp = express();
httpApp.all("*", middleware);
httpApp.use(express.static("./static/"));
httpApp.all("*", (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
})
const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => console.log(`80 is on`));
