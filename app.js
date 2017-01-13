var express = require("express");
var app = express();
var request = require("request");

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  //api search
  res.send("Hello, it works");
});


app.listen(app.get('port'));
