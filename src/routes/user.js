const express = require("express");
const router = express.Router();
const User = require("../../src/db/models").User;
const userController = require("../controllers/userController");
const validation = require("./validation");


router.get("/users/sign_up", userController.signUp);
router.post("/users/sign_up", validation.validateUsers, userController.create);
router.get("/users/sign_in", userController.signInForm);
router.post("/users/sign_in", validation.validateUsersSignIn, userController.signIn);
router.get("/users/sign_out", userController.signOut);
router.get("/users/upgrade", userController.upgrade);
router.get("/users/collaborations", userController.showCollaborations);
router.post("/users/:id/upgrade", userController.payment);
router.post("/users/:id/downgrade", userController.downgrade);


module.exports = router;