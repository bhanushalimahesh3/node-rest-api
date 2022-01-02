global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

// import npm modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// import custom modules
const { authenticateToken } = include('helpers/jwt_helper');
const { getDBSync } = include("helpers/env_helper");
const { hashedPassword, comparePassword } = include("helpers/hash_helper");
const { isAdmin } = include("middleware/role_middleware");

//database
const db = include('models/index');

 // routing
const usersRouter = include('routes/users');
const registerRouter = include('routes/register');
const authRouter = include('routes/auth');
const departmentRouter = include('routes/department');
const genderRouter = include('routes/gender');
const roleRouter = include('routes/role');
const downloadRouter = include('routes/download')

// express instance
const app = express();

// sync database
if (getDBSync() == "true") {
  db.DepartmentUserMappingModel.sync({ force: true }).then(() => {
    console.log("********* Drop and re-sync db ***********");
  }); 
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(logger('dev', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





// app.use(function(req, res, next) {
//   console.log('logger')
//   req.api_token = "123"
//   next();
// })
app.use('/download', downloadRouter);
app.use('/auth', authRouter);
app.use('/register', registerRouter);
app.use('/genders', genderRouter);
app.use('/departments', departmentRouter);
app.use('/roles', roleRouter);
app.use('/users', authenticateToken, isAdmin,  usersRouter);
app.use('/my-profile', authenticateToken, usersRouter)



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
