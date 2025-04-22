const pool = require('../utilis/db')

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

exports.postFeedback = async () => {

};

