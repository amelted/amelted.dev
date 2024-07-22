import express, { Request, Response, request, response } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import fs, {readFileSync} from 'fs'
import vhost from 'vhost'

const app = express()

let lolApp = express()
    .use(express.static("./lol.amelted.dev/"));

//app.all("*", middleware);
app.use(express.static("./amelted.dev/"));

app.all("*", (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
})

let serv = express()
    .use(vhost("lol.amelted.dev", lolApp))
    .use(vhost("amelted.dev", app));


// Create the HTTP/S servers, using the vhosted express app.

const httpsServer : any = https.createServer(
    {
        key: readFileSync('server.key'), 
        cert: readFileSync('server.cert')
    }, serv)
        .listen(443, () => console.log("443 listening"))
const httpServer = http.createServer(serv)
    .listen(80, () => console.log(`80 is on`));
