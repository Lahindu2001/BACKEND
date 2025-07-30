const express = require("express");
router = express.Router();
//insert Model
const User = require("../Model/UserModel") ;
//insert user controller+
const UserController = require("../Controlers/UserControlers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getbyId);

//export
module.exports = router;

