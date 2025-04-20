const express = require('express');
const { getSkills } = require('../controllers/skillsControllers')
const router = express.Router()

router.route('/').get(getSkills);

module.exports = router