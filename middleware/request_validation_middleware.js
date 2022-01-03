const Joi = require('joi');
const { success, error:errorResponse } = include('helpers/response_helper');

const requestValidation = (schema) => { 
  return (req, res, next) => { 
    const { error } = schema.validate(req.body); 
    const valid = error == null; 
    
    if (valid) { 
        next(); 
    } else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.json(errorResponse(message));
    } 
  } 
} 
module.exports.requestValidation = requestValidation;