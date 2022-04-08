const express = require('express');
const dbSetup = require('./db/db-setup');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const Book =require('./db/models/book');
const { user } = require('pg/lib/defaults');
dbSetup();
const app=express();
const port = 8080;


app.get('/book/:id',async (req,res,next)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }
    const{id} = req .params;
    const book = await Book.query().findById(id);
    res.json(book);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


app.listen(port,()=>console.log('server listening'));
