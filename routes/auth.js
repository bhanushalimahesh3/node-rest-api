const express = require('express');
const router = express.Router();
const { userAuthenticate } = include('controllers/auth_controller');

/* POST registration */
router.post('/', userAuthenticate);


module.exports = router;

