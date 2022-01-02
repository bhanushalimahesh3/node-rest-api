var express = require('express');
var router = express.Router();
const { downloadUserList } = include('controllers/download_controller');

router.get('/', downloadUserList);

module.exports = router;