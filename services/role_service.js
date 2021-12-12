const { RoleModel } = include('models/index')

const addRole = async ({name, code}) => {
    const newRole = await RoleModel.create({name, code})
    return newRole
}

module.exports = {
    addRole
}