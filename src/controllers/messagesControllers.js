const pool = require('../utilis/db');

exports.getMessages = async (req, res, next) => {
    try {
        const messages = (await pool.query('SELECT * FROM messages')).rows
        res.status(200).json({
            status: 'success',
            result: messages
        })
    } catch (error) {
        next(error)
    }
}