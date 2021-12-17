const dotenv = require('dotenv').config().parsed;

function getTokenSecrect() {
  return dotenv.TOKEN_SECRET;
}

function getDBHost() {
  return dotenv.DB_HOST;
}

function getDBName() {
  return dotenv.DB_NAME;
}

function getDBUserName() {
  return dotenv.DB_USER_NAME;
}

function getDBPassword() {
  return dotenv.DB_USER_PASSWORD;
}

function getDBSync() {
  return dotenv.DB_SYNC;
}

function getBaseURL() {
  return dotenv.BASE_URL;
}

module.exports = {
    getTokenSecrect,
    getDBHost,
    getDBName,
    getDBUserName,
    getDBPassword,
    getDBSync,
    getBaseURL
};