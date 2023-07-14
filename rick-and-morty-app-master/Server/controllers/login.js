const users = require("../utils/users")

function login(req, res) {
    const {email, password} = req.query;
    const result = users.find((user) => user.email === email && user.password === password);
    result ? res.status(200).json({access: true}) : res.status(200).json({access: false})
}


module.exports = login;