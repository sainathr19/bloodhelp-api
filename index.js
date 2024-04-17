const express=require('express')
const app=express()
const path=require('path')
app.use(express.json())
data=[
    {
        Fullname:"priya",
        Bloodgroup:"o+ve",
        email:"nan@gmail.com",
        mobilenumber:789456112,
        state:"ap",
        district:"kurnool",
        city:"kurnool",
        availability:"yes",
        last6monthsdonation:"yes"


    }
]
app.post('/pop',(req,res)=>{
    console.log(req.body)
    data .push(req.body)
    res.send(req.body)
})
searchdata=[{
    Bloodgroup:"o+ve",
    state:"ap",
    district:"kurnool",
    city:"kurnool"
}]
app.post('/search',(req,res)=>{
    console.log(req.body)
    searchdata.push(req.body)
    res.send(req.body)
})
app.listen(3000,()=>{
    console.log('running')
})