const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res) {
    const { id } = req.params
    axios(`${URL}${id}`).then(({ data }) => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        }
        if (character.name) {
            res.status(200).json(character)
        } else {
            res.status(404).send("Not found");
        }

    }).catch((error) => {
        res.status(500).json({ error: error.message })
    })
}

module.exports = getCharById;