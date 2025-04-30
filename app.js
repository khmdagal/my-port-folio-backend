const express = require('express');
const cors = require('cors');
const app = express();

const collaborationsRoutes = require('./src/routes/collaborationRoutes');
const messagesRoutes = require('./src/routes/messagesRoutes');
const projectsRoutes = require('./src/routes/projectsRoutes');
const skillsRoutes = require('./src/routes/skillsRoutes');
const techchallengesRoutes = require('./src/routes/techchallengesRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const aboutMeRoutes = require('./src/routes/aboutMeRoutes')


app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    next()
    console.log(req.baseUrl, req.headers['user-agent'])
})
//APIs

app.use('/api/v1/collaborations', collaborationsRoutes);
app.use('/api/v1/messages', messagesRoutes);
app.use('/api/v1/projects', projectsRoutes);
app.use('/api/v1/skills', skillsRoutes);
app.use('/api/v1/techChallenges', techchallengesRoutes);
app.use('/api/v1/feedbacks', feedbackRoutes);
app.use('/api/v1/aboutme', aboutMeRoutes);


module.exports = app;