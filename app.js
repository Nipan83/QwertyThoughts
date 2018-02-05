var express = require('express');
var path = require('path');
var request = require('request');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var algo1 = require('./algo1');
var algo2 = require('./algo2');
const port = process.env.PORT || 3000;



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res)=>{
	res.render('index');
});

app.post("/send1",function(req,res){
	var items=algo1.wordCount(req.body.string1);
	console.log(req.body.string1);
	console.log(items);
	 res.render('result1',{items:items});
	});

app.post("/send2",function(req,res){
	var items=algo2.wordCount(req.body.string2);
	console.log(req.body.string2);
	//console.log(items);
	 res.render('result2',{items:items, string2:req.body.string2});
	});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port,function(){
console.log("server is running");
});

module.exports = app;