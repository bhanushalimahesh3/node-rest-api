const { UserModel, DepartmentUserMappingModel, DepartmentModel, GenderModel } = include('models/user_model')

const addUser = async ({name, email, password, gender_id}) => {
    const newUser = await UserModel.create({name, email, password, gender_id})
    return newUser
}

const getUserList = async () => {
    const userList = await UserModel.findAll({attributes: ['id', 'name', 'email', 'gender_id'], include: [
        { model: DepartmentModel, as: 'departments'},
        {model: GenderModel, as: 'gender'}
    ]})
    return userList
}

const getUserById = async (userId) => {
    const userProfile = await UserModel.findOne({where:{id:userId}, attributes: ['id', 'name', 'email', 'gender_id'], include: 'departments'})
    return userProfile
}

const addUserToDepartment = async ({user_id, department_id}) => {
    const mappedDepartment = await DepartmentUserMappingModel.create({user_id, department_id})
    return mappedDepartment
}

module.exports = {
    addUser,
    getUserList,
    getUserById,
    addUserToDepartment
}