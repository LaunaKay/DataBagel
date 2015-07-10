var express = require('express');
var app = express();
var favicon = require('serve-favicon');

var server = app.listen(8888, function()
{
    console.log("Express server listening on port 8888");
});

var path=require('path');

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, './client')));
app.use(favicon(__dirname + '/client/images/favicon.ico'));

// Mongoose
require('./server/config/mongoose.js');

//HTTP Routes
require('./server/config/routes.js')(app);