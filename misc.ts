import { Request, Response } from "express";
import fs from 'fs'
import { createProxyMiddleware } from 'http-proxy-middleware'

export let proxyPub = createProxyMiddleware({
    //pathFilter: ["/", "/listen", "/api/", "/static/" ],
    target: "http://127.0.0.1:160",
    pathRewrite: {
        '^\/listen.$' : '/listen',
        '^\/listen\/$': '/listen/melted_jam/',
        '^\/webdj\/$': '/webdj/melted_jam/',

        '^\/$': '/public/melted_jam'
    },
    //changeOrigin: true
})
//export let listen = 
export let s404 = (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
}
export let lolFiles = (request: Request, response: Response)=>{
    let arr = fs.readdirSync('./lol.amelted.dev/assets/images/')
    response.json({count: arr.length}).end();
}
