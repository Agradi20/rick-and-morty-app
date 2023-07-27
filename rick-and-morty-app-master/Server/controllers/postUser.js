const { User } = require("../DB_connection")

const userPost = async (req, res) => {
    const {email, password} = req.body
    try {
        if(!email || !password) {
            return res.status(400).send("Faltan datos");
         } else {
            const user = await User.findOrCreate({where: {email, password}});
            return res.status(200).json(user);
         }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = userPost;