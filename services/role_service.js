const { RoleModel } = include('models/index')

const addRole = async ({name, code}) => {
    const newRole = await RoleModel.create({name, code})
    return newRole
}

const getRoleList = async () => {
    const roles = await RoleModel.findAll({attributes: ['id', 'name', 'code']})
    return roles
}

module.exports = {
    addRole,
    getRoleList
}