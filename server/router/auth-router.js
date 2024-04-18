const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js");
const {
	signupSchema,
	loginSchema,
} = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js");
// router.get(
// 	("/",
// 	(req, res) => {
// 		res.status(200).send("rigister");
// 	})
// );

router.route("/").get(authControllers.home);

router
	.route("/register")
	.post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
