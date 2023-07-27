const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res) => {
    const {id} = req.params;

    try {
        if(!id) {
            return res.status(404).send("No se encontro el id")
        } else {
            await Favorite.destroy({where: {id}});

            const favorite = await Favorite.findAll();
            return res.status(200).json(favorite);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deleteFav;