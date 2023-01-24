const User = require('../model/User')
const bcrypt = require('bcryptjs')

const UserController = {
    UserRegister: async function (req, res) {

        const selectedUser = await User.findOne({ email: req.body.email })
        if (selectedUser) {
            return res.status(400).json({
                success: false,
                msg: 'E-mail already registered'
            })
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            phone: req.body.phone
        })

        try {
            const savedUser = await user.save()
            res.json({
                success: true,
                data: savedUser,
                msg: 'Saved user in database'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error: error,
                msg: error.message
            })
        }
    },

    Login: async function (req, res) {
        
        const selectedUser = await User.findOne({ email: req.body.email })
        if (!selectedUser) {
            return res.status(400).json({
                success: false,
                msg: 'E-mail or password incorrect'
            })
        }

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)

        if(!passwordAndUserMatch) {
            return res.status(400).json({
                success: false,
                msg: 'E-mail or password incorrect'
            })
        }

        res.json({
            success: true,
            data: selectedUser,
            msg: 'User logged'
        })
    }
}

module.exports = UserController