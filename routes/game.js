const express = require("express");
const router = require("./user");
const { isAuthorized, isAdmin } = require("../middleware/auth");
const { gameValidations, validate } = require("../middleware/validations");
const gameController = require("../controllers/Game");

router.get("/all", gameController.getAllGames);

router.get("/:id", gameController.getGameDetail);

router.post(
  "/admin/add",
  isAuthorized,
  isAdmin,
  gameValidations(),
  validate,
  gameController.addGame
);

router.put(
  "/admin/edit/:id",
  gameValidations(),
  validate,
  gameController.editGame
);

router.delete("/admin/delete:id", gameController.deleteGame);

module.exports = router;
