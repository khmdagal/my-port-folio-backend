const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const {prodOrigin} = require('./src/utilis/origins')

const collaborationsRoutes = require('./src/routes/collaborationRoutes');
const messagesRoutes = require('./src/routes/messagesRoutes');
const projectsRoutes = require('./src/routes/projectsRoutes');
const skillsRoutes = require('./src/routes/skillsRoutes');
const techchallengesRoutes = require('./src/routes/techchallengesRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const aboutMeRoutes = require('./src/routes/aboutMeRoutes')


app.use(express.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if(origin !== `${prodOrigin}`){
        return res.status(400).json({
            status: 'fail',
        });
    }
    next();
});


app.use(cors({
    origin: `${prodOrigin}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(helmet());

//APIs
app.use('/api/v1/collaborations', collaborationsRoutes);
app.use('/api/v1/messages', messagesRoutes);
app.use('/api/v1/projects', projectsRoutes);
app.use('/api/v1/skills', skillsRoutes);
app.use('/api/v1/techChallenges', techchallengesRoutes);
app.use('/api/v1/feedbacks', feedbackRoutes);
app.use('/api/v1/aboutme', aboutMeRoutes);


module.exports = app;