const { success, error } = include('helpers/response_helper');
const { addRole } = include('services/role_service')

const roleRegister = async function(req, res, next) {
    role = await addRole({...req.body})
    res.json(success({"role": role}, "Role registered"))    
}

module.exports.roleRegister = roleRegister;