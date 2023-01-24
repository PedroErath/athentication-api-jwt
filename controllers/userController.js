const UserController = {
    UserRegister: function ( req, res){
        console.log('Register')
        res.send('Register')
    },

    Login: function ( req, res){
        console.log('Login')
        res.send('Login')
    }
}

module.exports = UserController