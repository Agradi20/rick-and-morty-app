const {Favorite} = require("../DB_connection");

const postFavorite = async (req, res) => {
    const {id, name, origin, status, image, species, gender} = req.body;

    try {
        if(!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send("Faltan datos");
        } else {
            await Favorite.findOrCreate({where: {id, name, origin, status, image, species, gender}
            });
            const favorite = await Favorite.findAll();
            res.status(200).json(favorite);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postFavorite;