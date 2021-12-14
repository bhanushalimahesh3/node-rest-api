var express = require('express');
var router = express.Router();
const { genderRegister, genderList } = include('controllers/gender_controller');

router.post('/', genderRegister);
router.get('/', genderList);

module.exports = router;
