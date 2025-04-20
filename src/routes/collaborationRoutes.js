const express = require('express');
const { getCollaborationTools } = require('../controllers/collaborationToolsControllers')
const router = express.Router();

router.route('/').get(getCollaborationTools)

module.exports = router