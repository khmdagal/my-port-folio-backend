const express = require('express');
const { getAboutMe } = require('../controllers/aboutMeControllers');
const router = express.Router();


router.route('/').get(getAboutMe)



module.exports = router;