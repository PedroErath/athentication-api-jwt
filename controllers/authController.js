require('dotenv').config()
const jwt = require('jsonwebtoken')

const authController = {
    verifyToken: function (req, res, next) {
        const token = req.header('authorization-token')

        if(!token) return res.status(401).json({
            success: false,
            error: 'Authorization token not found'
        })

        try {
            const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
            res.json({
                success: true,
                user: userVerified
            })

        } catch (error) {
            res.status(401).json({
                success: false,
                error: error,
                msg: 'Authorization token not valid'
            })
        }
    }
}

module.exports = authController