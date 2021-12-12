const { success, error } = include('helpers/response_helper');
const { addUser } = include('services/user_service')

const userRegister = async function(req, res, next) {
    user = await addUser({...req.body})
    res.json(success({"user": user}, "Users registered"))    
}

module.exports.userRegister = userRegister;