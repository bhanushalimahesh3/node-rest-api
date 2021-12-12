global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var authRouter = require('./routes/auth');
var departmentRouter = require('./routes/department');
var genderRouter = require('./routes/gender');


var app = express();

// database
var db = include('config/database.js');


//console.log(db)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//console.log(dotenv.config().parsed.TOKEN_SECRET);

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(logger('dev', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { authenticateToken } = include('helpers/jwt_helper');

// app.use(function(req, res, next) {
//   console.log('logger')
//   req.api_token = "123"
//   next();
// })
app.use('/auth', authRouter);
app.use('/register', registerRouter);
app.use('/genders', genderRouter);
app.use('/departments', departmentRouter);

app.use('/users', authenticateToken,  usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "manhesh not found"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
