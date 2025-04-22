const pool = require('../utilis/db');

exports.getCollaborationTools = async (req, res, next) => {
    try {
        const collaborationTools = (await pool.query('SELECT * FROM collaborations')).rows

       
        res.status(200).json({
            status: 'success',
            result: collaborationTools
        })

    } catch (error) {
        next(error)
    }


}