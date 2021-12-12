const jwt = require('jsonwebtoken');

const { getTokenSecrect } = require('./env_helper')

function generateAccessToken(username) {
    return jwt.sign({username}, getTokenSecrect(), { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, getTokenSecrect(), (err, user) => {
    console.log(err, "mahesh here")

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

function getUserInfoFromRequest(req) {
  return req.user
}

module.exports = {
    generateAccessToken,
    authenticateToken,
    getUserInfoFromRequest
};