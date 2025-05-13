const express = require('express');
const { getFeedback, postFeedback } = require('../controllers/feedbackControllers');
const  { validateFeedback } = require('../helpers/dataValidationJoi');
const router = express.Router();

router.route('/').get(getFeedback);
router.route('/').post(validateFeedback, postFeedback);


module.exports = router;

