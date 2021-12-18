const { UserModel, DepartmentUserMappingModel } = include('models/index')
const { hashedPassword, comparePassword } = include("helpers/hash_helper");

const addUser = async ({name, email, password, gender_id, role_id}) => {
    const hashPass = await hashedPassword(password);
    const newUser = await UserModel.create({name, email, password, gender_id, role_id, password:hashPass})
    return newUser
}

const getUserList = async () => {
    const userList = await UserModel.findAll({attributes: ['id', 'name', 'email', 'profile_pic_url', 'profile_pic'], include: ['gender', 'role']})
    return userList
}

const getUserById = async (userId) => {
    const userProfile = await UserModel.findOne({where:{id:userId}, attributes: ['id', 'name', 'email', 'profile_pic_url', 'profile_pic'], include: ['gender', 'role']})
    return userProfile
}

const addUserToDepartment = async ({user_id, department_id, manager_id}) => {
    const mappedDepartment = await DepartmentUserMappingModel.create({user_id, department_id, manager_id})
    return mappedDepartment
}

const getUserByEmail = async (userEmail) => {
    const userProfile = await UserModel.findOne({where:{email:userEmail}, attributes: ['id', 'name', 'email', 'password', 'profile_pic_url', 'profile_pic'], include: ['gender', 'role']})
    return userProfile
}

const verifyPassword = async (plainPassword, hashedPassword) => {
    const isVerified = await comparePassword(plainPassword, hashedPassword);
    return isVerified
}

const updateUserAvatarById = async (userId, filename) => {

    const isUpdated = await UserModel.update({ profile_pic: filename }, {
                        where: {
                        id: userId
                        }
                    });
    return isUpdated

}

module.exports = {
    addUser,
    getUserList,
    getUserById,
    addUserToDepartment,
    getUserByEmail,
    verifyPassword,
    updateUserAvatarById
}