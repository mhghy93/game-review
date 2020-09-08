const express = require("express");
const router = require("./user");
const gameController = require("../controllers/Game");

router.get("/all", gameController.getAllGames);

router.get("/:id", gameController.getGameDetail);

router.post("/add", gameController.addGame);

router.put("/edit/:id", gameController.editGame);

router.delete("/delete:id", gameController.deleteGame);

module.exports = router;
