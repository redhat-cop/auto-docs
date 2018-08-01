var chalk = require('chalk');
var express = require('express');
var jokes = require('./jokeHandler');
var app = express();
var utils = require('./utils');


app.get('/getIMG', function(req, res){
  //res.sendFile('/home/rmusti/Documents/experimentAPI/express-workshop/output.png');
  res.sendFile(__dirname + '/output.png');
});


var PORT = 8000;

app.listen(PORT, function() {
  console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
});
