const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quotes", (req, res) => res.send(game.quotes))
    .get("/room/picture", (req, res) => res.send(game.room.picture))
    .get("/room/quotes", (req, res) => res.send(game.room.quotes))
    .post("/room/picture", (req, res) => {
        game.room.picture = game.getNextPicture();
        console.log(game.room.picture);
    })


module.exports.router = router;