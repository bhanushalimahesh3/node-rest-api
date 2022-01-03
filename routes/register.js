var express = require('express');
var router = express.Router();
const { userRegister } = include('controllers/register_controller');
const { registrationSchema } = include('joi_schema/registration');
const { requestValidation } = include('middleware/request_validation_middleware');


/* POST registration */
router.post('/', requestValidation(registrationSchema), userRegister);

module.exports = router;
