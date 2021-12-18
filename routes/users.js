var express = require('express');
var router = express.Router();
const { userListing, userProfile, userAddDepartment, updateUserAvatar } = include('controllers/user_controller');
const uploadFileMiddleware = include('middleware/file_upload_middleware')

// const multer  = require('multer')
// const upload = multer({ dest: 'resources/avatar/' })

/* GET users listing. */
router.get('/', userListing);
router.put('/avatar', uploadFileMiddleware, updateUserAvatar);
router.put('/department', userAddDepartment);
router.get('/:userId', userProfile);

module.exports = router;
