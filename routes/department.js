var express = require('express');
var router = express.Router();
const { departmentRegister, departmentList } = include('controllers/department_controller');

router.post('/', departmentRegister);
router.get('/', departmentList);

module.exports = router;
