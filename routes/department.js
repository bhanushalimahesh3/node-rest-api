var express = require('express');
var router = express.Router();
const { departmentRegister } = include('controllers/department_controller');

/* POST registration */
router.post('/', departmentRegister);

module.exports = router;
