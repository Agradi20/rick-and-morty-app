const express = require('express');
const router = require("./routes/index")
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = 3001;

server.use(cors());

server.use(express.json())

server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});