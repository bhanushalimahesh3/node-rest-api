var express = require('express');
var router = express.Router();
const { roleRegister } = include('controllers/role_controller');

/* POST registration */
router.post('/', roleRegister);

module.exports = router;
