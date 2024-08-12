import { Request, Response } from "express";
import fs from 'fs'
import { createProxyMiddleware } from 'http-proxy-middleware'

export let proxyPub = createProxyMiddleware({
    target: "localhost:160",
    pathRewrite: {
        "/listen":
        "/public/melted_jam"
    }
})
export let proxyRadio = createProxyMiddleware({
    target: "localhost:160",
    pathRewrite: {
        "/listen":
        "/listen/melted_jam/radio.mp3"
    }

})
export let s404 = (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
}
export let lolFiles = (request: Request, response: Response)=>{
    let arr = fs.readdirSync('./lol.amelted.dev/assets/images/')
    response.json({count: arr.length}).end();
}
