const pool = require('../utilis/db');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = (await pool.query('SELECT * FROM projects')).rows
        res.status(200).json({
            status: 'success',
            result: projects
        })
    } catch (error) {
        next(error)
    }
}