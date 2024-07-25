import { Request, Response } from "express";
import fs from 'fs'

export let s404 = (request: Request, response: Response)=>{
    response.status(404).send(`you seem lost...`);
    response.end();
}
export let lolFiles = (request: Request, response: Response)=>{
    let arr = fs.readdirSync('./lol.amelted.dev/assets/images/')
    response.json({count: arr.length}).end();
}
