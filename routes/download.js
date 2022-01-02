var express = require('express');
var router = express.Router();
const { downloadUserList, uploadUserList } = include('controllers/download_controller');

router.get('/download', downloadUserList);
router.get('/upload', uploadUserList);

module.exports = router;