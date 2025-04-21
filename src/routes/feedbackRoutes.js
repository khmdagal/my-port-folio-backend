const express = require('express');
const { getFeedback, postFeedback } = require('../controllers/feedbackControllers');
const router = express.Router();

router.route('/').get(getFeedback);
router.route('/').post(postFeedback);


module.exports = router;

