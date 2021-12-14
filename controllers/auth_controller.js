const { generateAccessToken } = include('helpers/jwt_helper');
const { success, error } = include('helpers/response_helper');
const { getUserByEmail, verifyPassword } = include('services/user_service');


const userAuthenticate = async function(req, res, next) {
    const user = await getUserByEmail(req.body.email);

    if(user == null)
        res.json(error('Invalid email or password'));

    const isVerified = await verifyPassword(req.body.password, user.password);
    if(isVerified)
        res.json(success({"user": {
            "token": generateAccessToken(user.email, user.id, user.role.id, user.role.code)
        }}, 
        "Users authenticated"
        ));

    res.json(error('Invalid email or password'));
}

module.exports.userAuthenticate = userAuthenticate;