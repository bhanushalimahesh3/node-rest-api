const Joi = require('joi');

const registrationSchema = Joi.object({
      
        name: Joi.string()
                .min(5)
                .max(30)
                .required(),

        email: Joi.string()
                .email()
                .min(5)
                .max(30)
                .required(), 
                
        password: Joi.string()
                .min(5)
                .max(30)
                .required(),                         
                    
        gender_id: Joi.number()
            .integer()
            .required(), 
                
        role_id: Joi.number()
                    .integer()
                    .required(),
                        
    }).options({ abortEarly: false });


module.exports.registrationSchema = registrationSchema;
