var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser');
var config = require('./config');



var passport = require('passport');


var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Import routes for "product" area of site
var productRouter = require('./routes/product');


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
const url = config.mongoUrl;


const connect = mongoose.connect(url, {
  useNewUrlParser: true
});

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => {
  console.log(err);
});

// To set up the view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



// app.use('/', routes);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Add product routes to middleware chain.
app.use('/product', productRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.send(err.message);
  // res.sendStatus(err.status);
  // console.log(err.message);
  res.status(err.status || 500);

  // res.send(err.status);
  // res.render('error');
});

module.exports = app;