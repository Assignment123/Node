var express = require("express");
var route = require("./Route/route");
const mongoose = require('mongoose');
parser= require("body-parser");


mongoose.connect('mongodb://sudrishya:sudrishya123@ds053128.mlab.com:53128/database_task');

mongoose.connection.once('open',function(){
    console.log('Connection has been made')
}).on('error',function(error){
    console.log('Connection error:',error);
})

var app = express();

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(parser.json());
app.use('/api/', route);

app.listen(8000);