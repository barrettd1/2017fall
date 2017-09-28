const http = require("express");
const handler = require("./httpHandler.js");

const server = http();

server.use("/json", function(req, res, next){
    res.send({ happy: "Yom Kippur"})
    next();
});

server.use("/old", handler.main);

server.listen(3000);

console.log("http://localhost:3000");