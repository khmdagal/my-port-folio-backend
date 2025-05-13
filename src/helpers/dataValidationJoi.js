const Joi = require('joi');

const feedbackSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    feedback: Joi.string().min(10).required(),
    rating: Joi.number().integer().min(1).max(10).required()
});

exports.validateFeedback = (req, res, next) => {
    const { error, value } =  feedbackSchema.validate(req.body, {
        stripUnknown: true
    });
    
    if (error) {
        return res.status(400).json({
            status: 'fail',
            message: error.details[0].message.replace(/"/g, ''),
        });
    }
    req.body = value; // Update the request body with the validated value
    console.log('** from validation file **',req.body)
    
    next();
};