var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.findAllUsers);

router.get("/:idUser", userController.findUserById);

router.delete("/:idUser", userController.deleteUserById);

router.post("/newUser", userController.createUser);

router.post("/login", userController.authUser);

router.post("/updateUser", userController.updateUser);

module.exports = router;
