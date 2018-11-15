var express = require("express");
var route = require("./Route/route");
var parser= require("body-parser");
var app = express();

app.use(parser.json());
app.use('/api/', route);
app.listen(8000);
