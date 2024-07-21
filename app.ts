import express, { Request, Response, request } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import {readFileSync} from 'fs'
const app = express()

app.use(express.static("./static/"));

const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, app).listen(443, () =>{
    console.log("443 listening!")
})
const httpApp = express();
httpApp.use(express.static("./static/"));
const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => console.log(`80 is on`));
