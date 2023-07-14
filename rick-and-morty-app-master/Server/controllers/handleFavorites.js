let myFavorite = [];

function postFav(req, res) {
    const character = req.body;
    myFavorite.push(character);
    res.status(200).json(myFavorite);
}

function deleteFav(req, res) {
    const { id } = req.params;
    const result = myFavorite.filter((fav) => fav.id !== Number(id))
    myFavorite = result;
    res.status(200).json(myFavorite);
}

module.exports = {
    postFav,
    deleteFav
};