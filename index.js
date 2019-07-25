// importing the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var loginrouter=require('./app/controller/login');

var globalconfig=require('./config/globalconfig');  //read config file

// defining the Express app
var app=express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

app.post('/api/v1/login',loginrouter.logincheck)
app.get('/api/v1/displaydata',loginrouter.displaydata)

app.listen(globalconfig.port,globalconfig.ip, () => {
    console.log('listening on port 3001');
  });