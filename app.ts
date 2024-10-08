import express, { Request, Response, request, response } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
import fs, {readFileSync} from 'fs'
import vhost from 'vhost'
import { lolFiles, proxyPub, s404 } from './misc'



const app = express()
    .use(express.static("./amelted.dev/"))
    // .get('/api/count', lolFiles) // Unneeded for rn
    .all("*", s404);
let lolApp = express()
    .use(express.static("./lol.amelted.dev/"))
    .get('/api/count', lolFiles)
    .all("*", s404);
let radioApp = express()
    .use("/", proxyPub)
    //.use("/listen", listen)
    .all("*", s404);
let serv = express()
    .use(vhost("lol.amelted.dev", lolApp))
    .use(vhost("amelted.dev", app))
    .use(vhost("radio.amelted.dev", radioApp));

// Create the HTTP/S servers, using the vhosted express app.
const httpsServer : any = https.createServer({ key: readFileSync('server.key'), cert: readFileSync('server.cert') }, serv)
    .listen(443, () => console.log("443 listening"))
const httpServer = http.createServer(serv)
    .listen(80, () => console.log(`80 is on`));
