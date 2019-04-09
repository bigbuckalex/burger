let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", function(res){
    burger.all(function(req, res){
        
    });
});

module.exports = router;