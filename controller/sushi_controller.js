var express = require("express");
var router = express.Router();

var sushi = require("../models/sushimodel");

router.get("/", function (req, res) {
    sushi.all(function (data) {
        var hbsObject = {
            sushi: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/sushi", function (req, res) {

    console.log(`${req.body.name} is being requested to be MADE`);
    // res.status(200).end();

    newName = `(${req.body.name})`

    sushi.create(req.body.name, function (result) {
        res.json({ id: result.insertId });
    });

});

router.put("/api/sushi/:id", function (req, res) {

    console.log(`${req.params.id} is being requested to be eaten`);

    sushi.update(req.body.eaten, req.params.id, function (result) {
        res.status(200).end();
    });
});

module.exports = router;