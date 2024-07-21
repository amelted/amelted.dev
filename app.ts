import express, { Request, Response, request } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import {readFileSync} from 'fs'
const app = express()

app.use(express.static("./static/"));
app.use((req, res, next) => {
    if(req.get('host') == "lol.amelted.dev"){
        res.render(readFileSync('./static/lol/index.html', 'utf-8'))
        res.end();
    }
    next()
});

const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, app).listen(443, () =>{
    console.log("443 listening!")
})
const httpApp = express();
httpApp.use(express.static("./static/"));
httpApp.all
const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => console.log(`80 is on`));
