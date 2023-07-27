const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav")
const login = require("../controllers/login");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.post("/login", postUser);
router.delete("/fav/:id", deleteFav);

module.exports = router;