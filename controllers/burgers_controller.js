let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", (req, res)=>{
    burger.all((data)=>{
        let burgerData = {
            burgers: data
        }
        res.render("index", burgerData);
    });
});

router.post("/api/burgers", (req, res)=>{
    burger.insert(req.body.name, req.body.devoured, (data)=>{
        res.json(data); //{id: data.id} ???
    });
});

router.put("/api/burgers/:id", (req, res)=>{
    burger.update(req.body.name, req.body.devoured, (data)=>{
        res.json(data);
    });
});

module.exports = router;