var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res){
  res.render("search");
});

//api search
app.get('/results', function(req, res){
  //grabbing the search term user plugs in to form
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query;
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
    //turn string into object to access key|value pairs
      var data = JSON.parse(body);
      // res.send(results["Search"][0]["Title"]);
      res.render("results", {data: data});
    }
  });
});


app.listen(app.get('port'), function(){
  console.log("Movie App has started!");
});
