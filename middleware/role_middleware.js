const { getUserInfoFromRequest } = include('helpers/jwt_helper');

function isAdmin(req, res, next) {
    const user = getUserInfoFromRequest(req);
    if (user.roleCode != 'admin')
        return res.sendStatus(401)

   next()
}

function isEmployee(req, res, next) {
    console.log(getUserInfoFromRequest(req), "is employee middleware")
 
    next()
 }

module.exports = {
    isAdmin
}