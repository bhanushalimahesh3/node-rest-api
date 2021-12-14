var express = require('express');
var router = express.Router();
const { roleRegister, roleList } = include('controllers/role_controller');

router.post('/', roleRegister);
router.get('/', roleList);

module.exports = router;
