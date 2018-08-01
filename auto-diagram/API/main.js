var chalk = require('chalk');
var express = require('express');
var app = express();


app.get('/getIMG', function(req, res){
  //res.sendFile('/home/rmusti/Documents/experimentAPI/express-workshop/output.png');
  res.sendFile(__dirname + '/output.png');
});


var PORT = 8000;

app.listen(PORT, function() {
  console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
});
