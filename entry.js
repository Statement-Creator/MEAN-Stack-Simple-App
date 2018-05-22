//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/routes.js');
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/shoppinglist');

//on connection
mongoose.connection.on('connected', ()=>{
  console.log('Mongodb connected');
});

//on connection error
mongoose.connection.on('error',(err)=>{
  console.log(err);
});

const PORT =3000;

//adding middleware - cors
app.use(cors());
//adding middle -bodyparser
app.use(bodyparser.json());
//adding route
app.use('/api', route);


app.get('/',(req,res)=>{
  res.send('works');
})

app.listen(PORT, ()=>{
  console.log('server has been started:'+PORT)
})
