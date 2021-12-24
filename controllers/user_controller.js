const multer = require('multer');
const { UserModel, DepartmentModel } = include('models/index')
const upload = multer({ dest: 'uploads/' })
const { success, error } = include('helpers/response_helper');
const { getUserInfoFromRequest } = include('helpers/jwt_helper');
const { getUserList, getUserById, addUserToDepartment, updateUserAvatarById } = include('services/user_service')
const uploadFile = include('middleware/file_upload_middleware')
const { getDepartmentById } = include('services/department_service')

const userListing = async function(req, res, next) {
    const userList = await getUserList()
    console.log(userList, "user lisitng*****")
    res.json(success({"users": userList}, "User listing"));
}

const userProfile = async function(req, res, next) {
    const userProfile = await getUserById(req.params.userId)
    res.json(success({"users":userProfile}, "User profile"));
}

const userAddDepartment = async function(req, res, next) {
    const user = await getUserById(req.body.user_id)
    const department = await getDepartmentById(req.body.department_id)

    const deptAdded = await user.addDepartments(department, {through: {manager_id:req.body.manager_id}})
    
    res.json(success({"users":{}}, "Department updated"));
}

const updateUserAvatar = async function(req, res, next) {
    const userId = getUserInfoFromRequest(req).userId
    const isUpdated = await updateUserAvatarById(userId, req.file.filename)
    
    console.log(req.file, isUpdated)
    res.json(success({"users":{}}, "User avatar updated"));
    // const departmentMapped = await addUserToDepartment({...req.body})
    // res.json(success({"users":{}}, "Department mapped"));
    // try {
    //     const fileUploaded = await uploadFile(req, res);
    //     console.log(fileUploaded, "file uploaded")

    //     if (req.file == undefined) {
    //         res.json(error("File not uploaded"));
    //     }
    //     res.json(success({"users":{}}, "File uploaded"));
    // } catch (error) {
    //     res.json(error(`Could not upload the file: ${req.file.originalname}. ${err}`))
        
        
    // }
}

module.exports = {
    userListing,
    userProfile,
    userAddDepartment,
    updateUserAvatar
};