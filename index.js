const express=require( "express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser");
const dotenv =require("dotenv")



const app=express()
app.use(bodyParser.json())
dotenv.config()
const PORT=process.env.PORT||5000;
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then(()=>{
    console.log("database connected successfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port:${PORT}`)
    })
}).catch(error=>console.log(error))
const itemScehma=new mongoose.Schema({
    Fullname:String,
    Bloodgrp:String,
    Email:String,
    Mobileno:String,
    State:String,
    District:String,
    City:String,
    Availability:String,
    Last_6months_donations:Boolean

})
const Item=mongoose.model('Item',itemScehma);
app.post('/register',async(req,res)=>{
    try{
        const {Fullname,Bloodgrp,Email,Mobileno,State,District,City,Availability,Last_6months_donations}=req.body
        const newItem=new Item({
            Fullname,
            Bloodgrp,
            Email,
            Mobileno,
            State,
            District,
            City,
            Availability,
            Last_6months_donations

        })
        const savedItem=await newItem.save();
        res.send("Posted")
    }catch(error){
        console.error('error saving item to mongodb',error)
        res.json({error:'Internal server error'})
    }
})

app.post("/fetchall",async function(req,res){
    const {Bloodgrp,State,District,City}=req.body;
    const query={};
    if (Bloodgrp) query.Bloodgrp=Bloodgrp;
    if (State) query.State=State;
    if (District) query.District=District;
    if (City) query.City=City;
    try{
        const savedItems=await Item.find(query);
        res.send(savedItems)
    }
    catch(err){
        
        res.send('internal server error')
    }
    
})