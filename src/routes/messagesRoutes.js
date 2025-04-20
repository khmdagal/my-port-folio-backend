const express = require('express');
const { getMessages } = require('../controllers/messagesControllers');
const router = express.Router();

router.route('/').get(getMessages);
module.exports = router