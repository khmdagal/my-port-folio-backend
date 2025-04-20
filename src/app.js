const express = require('express');
const cors = require('cors');
const app = express();

const collaborationsRoutes = require('.././routes/collaborationRoutes');
const messagesRoutes = require('././routes/messagesRoutes');
const projectsRoutes = require('././routes/projectsRoutes');
const skillsRoutes = require('././routes/skillsRoutes');

app.use(express.json());
app.use(cors());

//APIs

app.use('api/v1/collaborations', collaborationsRoutes)
app.use('api/v1/messages', messagesRoutes)
app.use('api/v1/projects', projectsRoutes)
app.use('api/v1/skills', skillsRoutes)


module.exports = app;