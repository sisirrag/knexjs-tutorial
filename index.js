const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app=express();
const port = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


app.listen(port,()=>console.log('server listening'));
