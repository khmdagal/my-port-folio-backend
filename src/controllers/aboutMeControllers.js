const pool = require('../utilis/db');

exports.getAboutMe = async (req, res, next) => {
    try {
        const aboutMe = (await pool.query('SELECT * FROM about_me')).rows;
        res.status(200).json({
            status: 'success',
            result: aboutMe
        })

    } catch (error) {
        next(error)
    }
}