import express, { Request, Response, request } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import {readFileSync} from 'fs'
const app = express()
let middleware = (req: Request, res: Response, next : Function) => {
    console.log(req.get('host'))
    if(req.get('host') == "lol.amelted.dev"){
        res.render(readFileSync('./static/lol/index.html', 'utf-8'))
        res.end();
    }
    next()
}
app.use(express.static("./static/"));
app.use(middleware);

const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, app).listen(443, () =>{
    console.log("443 listening!")
})
const httpApp = express();
httpApp.use(express.static("./static/"));
httpApp.use(middleware);
const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => console.log(`80 is on`));
