const { success, error } = include('helpers/response_helper');
const { addRole, getRoleList } = include('services/role_service')

const roleRegister = async function(req, res, next) {
    role = await addRole({...req.body})
    res.json(success({"role": role}, "Role registered"))    
}

const roleList = async function(req, res, next) {
    roles = await getRoleList()
    res.json(success({"roles": roles}, "Role list"))    
}

module.exports = {
    roleRegister,
    roleList
};