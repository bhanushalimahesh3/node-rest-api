var express = require('express');
var router = express.Router();
const { userRegister } = include('controllers/register_controller');

/* POST registration */
router.post('/', userRegister);

module.exports = router;
