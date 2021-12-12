var express = require('express');
var router = express.Router();
const { userListing, userProfile, userAddDepartment } = include('controllers/user_controller');

/* GET users listing. */
router.get('/', userListing);
router.post('/department', userAddDepartment);
router.get('/:userId', userProfile);

module.exports = router;
