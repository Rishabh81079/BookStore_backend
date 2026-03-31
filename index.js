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
    if(!booker){
    return res.status(404).send("Book not found")
}
    res.send(booker)
})


app.post("/book",(req,res)=>{
    console.log(req.body);
    
    bookStore.push(req.body)
    res.status(201)
    res.send("Data saved successfully")
})




app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    console.log(id);
    
    const del = bookStore.findIndex(value => value.id === id)
    bookStore.splice(del,1)
    res.send("deleted")
})


app.put("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const update = bookStore.find(value => value.id === id)
    if (!update) {
    return res.status(404).send("Book not found")
}
    const author = req.body.author
    if(author){
        update.author = author
    }
    const name = req.body.name
    if(name){
        update.name= name
    }
    res.send("updated")
})

app.patch("/book/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const book = bookStore.find(value => value.id === id)

    if (!book) {
        return res.status(404).send("Book not found")
    }

    if (req.body.name !== undefined) {
        book.name = req.body.name
    }

    if (req.body.author !== undefined) {
        book.author = req.body.author
    }

    res.send(book)
})




app.get("/",(req,res)=>{
    res.send("book home");
    
})


app.listen(1234,()=>{
    console.log("Hello Backend Port 1234");
    
})