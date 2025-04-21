const express = require('express');
const { getTechChallenges } = require('../controllers/techchallengesControllers');
const router = express.Router()

router.route('/').get(getTechChallenges);

module.exports = router