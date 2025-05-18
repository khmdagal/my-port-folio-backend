const Joi = require('joi');

const feedbackSchema = Joi.object({
    id: Joi.string().min(1).required(),
    name: Joi.string().min(3).max(40).required(),
    email: Joi.string().email().required(),
    feedback: Joi.string().min(10).required(),
    rating: Joi.string().min(1).max(10).required()
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
    next();
};