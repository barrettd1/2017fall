const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quote", (req, res) => res.send(game.getNextQuote()))
    .get("/quotes", (req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .get("/room/picture", (req, res) => res.send(game.room.picture))
    .get("/room/quotes", (req, res) => res.send(game.room.quotes))
    .post("/room/picture", (req, res) => {
        game.room.picture = game.getNextPicture();
        res.status(201).send(game.room.picture);
    })
    .post("/room/quotes", (req, res) => {
        game.room.quotes.push(req.body);
        res.status(201).send(game.getNextQuote());
    })


module.exports.router = router;