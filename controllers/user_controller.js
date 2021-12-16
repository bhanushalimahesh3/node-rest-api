const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { success, error } = include('helpers/response_helper');
const { getUserInfoFromRequest } = include('helpers/jwt_helper');
const { getUserList, getUserById, addUserToDepartment } = include('services/user_service')
const uploadFile = include('middleware/file_upload_middleware')

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
    const departmentMapped = await addUserToDepartment({...req.body})
    res.json(success({"users":{}}, "Department mapped"));
}

const updateUserAvatar = async function(req, res, next) {
    
    console.log(req.file, "yeah")
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