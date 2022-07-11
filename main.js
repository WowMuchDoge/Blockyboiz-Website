const express = require('express')
const app = express();
const port = 8080
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })