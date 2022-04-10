const express = require('express');
const dbSetup = require('./db/db-setup');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const Book =require('./db/models/book');
const { user } = require('pg/lib/defaults');
const app=express();
const port = 8080;

dbSetup();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(cors());



app.get('/book/:id',async (req,res,next)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }
    const{id} = req.params;
    const book = await Book.query().findById(id);
    res.json(book);
});

app.delete('/book/:id',async (req,res,next)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }
    const{id} = req.params;
    const book = await Book.query().deleteById(id);
    res.send('Book is deleted');
});

app.post('/book/:id',async (req,res,next)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }
    const{id} = req.params;
    const nb=req.body;
    const book = await Book.query().findById(id).patch({
        isbn: nb.isbn,
        title: nb.title,
      });
    res.send('Book is edited');
});

app.get('/books', async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }
    const books = await Book.query();
    console.log(books.length);
    res.json(books);
});






app.listen(port,()=>console.log('server listening'));
