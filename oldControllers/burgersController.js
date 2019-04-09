const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        res.render("BurgerLog", {burgers: data})
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne(req.body, (data) => {
        res.redirect("/");
    });
});

router.put("/api/burger/:id", (req, res) => {
    const data = {
        devoured: true
    };
    burger.updateOne(data, req.params.id, (data) => {
        res.json(data);
    });

});



router.delete("/api/burger/:id", (req, res) => {
    burger.deleteOne("id", req.params.id, (data) => {
        res.json(data);
    }); 
})




module.exports = router;