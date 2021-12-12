const dotenv = require('dotenv').config().parsed;

function getTokenSecrect() {
  return dotenv.TOKEN_SECRET;
}

module.exports = {
    getTokenSecrect
};