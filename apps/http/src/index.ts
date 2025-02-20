import {client} from '@repo/db/client'
import z from 'zod';

import express from 'express';

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world from backend!!!")
})

app.post("/signup",async(req,res)=>{
    const {name,email}=req.body;

    const DBEntry=await client.users.create({
       data:{
        name,
        email
       } 
    })
    res.json({
        message:"User created!!!"
    })
})


app.post("/signin",async(req,res)=>{
    const {email}=req.body;
    const DBFind=await client.users.findUnique({
       where:{
        email
       } 
    })
    if(DBFind){
        res.json({
            message:"User created!!!"
        })
    } else{
        res.status(404).send("User not found!!!")
    }
})


app.listen(3001,()=>{
    console.log("Server started!!!")
})
