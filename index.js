const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const User = require('./models/User.model');
mongoose.connect(`${process.env.DB_HOST}${process.env.DB_DATABASE}`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to mongoose');
});

app.get('/',(req,res,next) =>{
     User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
      });
    // console.log(users);
    res.send("I am index page");
});

app.listen(process.env.PORT,function(){
console.log('server started succefully');
});