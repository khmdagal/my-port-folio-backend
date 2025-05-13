const pool = require('../utilis/db');
exports.getFeedback = async (req, res, next) => {
try {
    const feedbacks = (await pool.query('SELECT * FROM feedbacks')).rows
    res.status(200).json({
        status: 'success',
        result: feedbacks
    })
} catch (error) {
    next(error)
}
};

exports.postFeedback = async (req, res, next) => {
    const {id, name, email, feedback, rating} = req.body;

try {
const postFeedback = await pool.query(`insert into feedbacks(id, name, email, feedback, rating)
    values($1, $2, $3, $4, $5)`,[id,name,email,feedback,rating]).rows;

    if (!postFeedback) {
        return res.status(400).json({
            status: 'fail',
            message: 'Feedback not posted'
        })
    };

    res.status(201).json({
        status: 'success',
        postFeedback
    });

} catch (error) {

    res.send(error)
}
next()
};

