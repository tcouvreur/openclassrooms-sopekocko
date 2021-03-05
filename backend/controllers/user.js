const User = require("../models/users");

function signUp(req, res, next) {
    try {
        const user = new User({
            "email"     : "test@gmail.com",
            "password"  : "123"
        });
    } catch(err) {
        console.log(err);
    }
    console.log(user);
   
}

module.exports.signUp = signUp;