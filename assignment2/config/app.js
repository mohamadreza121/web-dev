let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Import routers
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let bookRouter = require('../routes/book')

let app = express();
let mongoose = require('mongoose');
let DB = require('./db');

// point my mongoose to the URI
let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console, 'connection'));
mongoDB.once('open',()=>{
  console.log('MongoDB Connected')
});
mongoose.connect(DB.URI,{UseNewUrlParser:true, useUnifiedTopology:true});

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// Use routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',bookRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
