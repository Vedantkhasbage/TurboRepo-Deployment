import { WebSocketServer } from "ws";
import {client} from '@repo/db/client'

const WebServer=new WebSocketServer({port:8000});


WebServer.on("connection",(socket)=>{
    console.log("user conneted!!!");

    socket.send("helloo user welcome")
    socket.on("message",(message)=>{
        socket.send("helloo")
    })
})