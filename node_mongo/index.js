const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Item = require('./models/item');

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

app.use(express.static(__dirname + '/public/'));