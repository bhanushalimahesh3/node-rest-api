const { success, error } = include('helpers/response_helper');
const { getUserInfoFromRequest } = include('helpers/jwt_helper');
const { getUserList, getUserById, addUserToDepartment } = include('services/user_service')


const userListing = async function(req, res, next) {
    const userList = await getUserList()
    console.log(userList, "user lisitng*****")
    res.json(success({"users":{}}, "User listing"));
}

const userProfile = async function(req, res, next) {
    const userProfile = await getUserById(req.params.userId)
    res.json(success({"users":userProfile}, "User profile"));
}

const userAddDepartment = async function(req, res, next) {
    const departmentMapped = await addUserToDepartment({...req.body})
    res.json(success({"users":{}}, "Department mapped"));
}

module.exports = {
    userListing,
    userProfile,
    userAddDepartment
};