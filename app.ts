import express, { Request, Response, request } from 'express'
import https, {createServer} from 'https'
import http, {ServerResponse, IncomingMessage} from 'http'
const app = express()

app.use(express.static("./static/"));

const httpsServer : any = https.createServer({}, app);

let server = app.listen(443, () =>{
    console.log("listening!")
})
const httpServer : any = createServer({}, (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 301
    res.setHeader('location', "https://amelted.dev")
});
// httpServer.on('request', (req: Request, res: Response) => )
httpServer.listen(80, () => {
    console.info(`HTTP Server running on port 80.`);
});
