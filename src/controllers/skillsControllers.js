const pool = require('../utilis/db')

exports.getSkills = async (req, res, next) => {
    try {
        const skills = (await pool.query('SELECT * FROM skills')).rows
        res.status(200).json({
            status: 'success',
            result: skills
        })
    } catch (error) {
        next(error)
    }
} 