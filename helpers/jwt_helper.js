const jwt = require('jsonwebtoken');

const { getTokenSecrect } = require('./env_helper')

function generateAccessToken(email, userId, roleId, roleCode) {
    return jwt.sign({email, userId, roleId, roleCode}, getTokenSecrect(), { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, getTokenSecrect(), (err, user) => {

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