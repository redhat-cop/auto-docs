var chalk = require('chalk');
var express = require('express');
var jokes = require('./jokeHandler');
var app = express();
var utils = require('./utils');


app.get('/getJPEG', function(req, res){
  //res.sendFile('/home/rmusti/Documents/experimentAPI/express-workshop/output.jpeg');
  res.sendFile(__dirname + '/output.jpeg');
});


var PORT = 8000;

app.listen(PORT, function() {
  console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
});
