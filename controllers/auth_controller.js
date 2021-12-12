const { generateAccessToken } = include('helpers/jwt_helper');
const { success, error } = include('helpers/response_helper');


const userAuthenticate = function(req, res, next) {
    res.json(success({"user": {
        "token": generateAccessToken(req.body.email)
    }}, 
    "Users authenticated"
    ));
}

module.exports.userAuthenticate = userAuthenticate;