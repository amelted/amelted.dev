import express, { Request, Response, request, response } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import fs, {readFileSync} from 'fs'
const app = express()
let middleware = (req: Request, res: Response, next: Function) => {
    
    if(req.get('host') != "lol.amelted.dev"){
        next();return;
    }
    if(!req.originalUrl.includes("assets")){
        res.sendFile('/static/lol/index.html', {root: __dirname});
        next();return;

    }
    let filename = `./static/lol/assets/motivational${req.originalUrl.slice(20,22)}.png`;
    if(!fs.existsSync(filename)){
        res.statusCode = 404;
        res.send(`you seem lost...`); 
        next();return;
    }
        
    res.sendFile(filename, {root: __dirname});
    next();return;
}
app.all("*", middleware);
// app.all("*", (request: Request, response: Response)=>{
//     response.status(404).send(`you seem lost...`);
//     response.end();
// })
app.use(express.static("./static/"));

const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, app).listen(443, () =>{
    console.log("443 listening!")
})
const httpApp = express();
httpApp.all("*", middleware);
// httpApp.all("*", (request: Request, response: Response)=>{
//     response.statusCode = 404
//     response.send(`you seem lost...`);
//     response.end();
// })
httpApp.use(express.static("./static/"));

const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => console.log(`80 is on`));
