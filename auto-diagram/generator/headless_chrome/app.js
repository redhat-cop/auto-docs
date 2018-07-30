var takeScreenShot = require('./screenshot.js')
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
      takeScreenShot()
      .then(() => {
        res.sendFile(__dirname + '/output.jpeg')
      })
      .catch(() => console.log("error"));
})

app.listen(3000, () => console.log('listening on port 3000!'))
