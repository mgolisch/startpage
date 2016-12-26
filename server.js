var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
//allow setting port from env| usefull to properly work in paas environments like heroku,dokku,azure websites..
var port = process.env.PORT||3000;

var mongoose = require('mongoose');
var db_uri = process.env.DATABASE_URI
mongoose.connect('mongodb://'+db_uri+'/test')

require('./models/link')

var api = require('./routes/api');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(allowCrossDomain)

app.use('/api/',api);



app.listen(port);
