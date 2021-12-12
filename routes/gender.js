var express = require('express');
var router = express.Router();
const { genderRegister } = include('controllers/gender_controller');

/* POST registration */
router.post('/', genderRegister);

module.exports = router;
