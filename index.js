const express = require('express')

const app = express();

app.use(express.json())

const bookStore = [
    {id:1, name:"rich dad", author:"kiyosaki"},
    {id:2, name:"power", author:"kiyosaki"},
    {id:3, name:"search", author:"kiyosaki"},
    {id:4, name:"babylon", author:"kiyosaki"},
    {id:5, name:"grow think", author:"kiyosaki"},

]


app.get("/book",(req,res)=>{
    res.send(bookStore);
    
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt( req.params.id)
    console.log(id);
    
    const booker = bookStore.find(data=> data.id=== id)
    res.send(booker)
})


app.post("/book",(req,res)=>{
    console.log(req.body);
    
    bookStore.push(req.body)
    res.send("Data saved successfully")
})



app.get("/",(req,res)=>{
    res.send("book home");
    
})


app.listen(1234,()=>{
    console.log("Hello Backend Port 1234");
    
})