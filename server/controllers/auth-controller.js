const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
	try {
		res.status(200).send("rigister");
	} catch (error) {
		console.log(error);
	}
};

const register = async (req, res) => {
	try {
		console.log(req.body);
		const { username, email, phone, password } = req.body;

		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(400).json({ message: "email already exist" });
		}

		// const saltRound = 10;
		// const hash_password = await bcrypt.hash(password, saltRound);

		const userCreated = await User.create({
			username,
			email,
			phone,
			password,
			// password: hash_password,
		});

		res.status(201).json({
			msg: "Registration Successfull",
			token: await userCreated.generateToken(),
			userId: userCreated._id.toString(),
		});
	} catch (error) {
		res.status(500).json("Internal server error");
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const userExist = await User.findOne({ email });

		if (!userExist) {
			return res.status(400).json({ message: "Invalid Crendtials" });
		}

		// const user = await bcrypt.compare(password, userExist.password);
		const user = await userExist.comparePassword(password);

		if (user) {
			res.status(200).json({
				msg: "Login Successful",
				token: await userExist.generateToken(),
				userId: userExist._id.toString(),
			});
		} else {
			res.status(401).json({ message: "Invalid email and password" });
		}
	} catch (error) {
		next(error);
	}
};

const user = async (req, res) => {
	try {
		const userData = req.user;
		console.log(userData);
		return res.status(200).json({ userData });
	} catch (error) {
		console.log(`error from the user route ${error}`);
	}
};

module.exports = { home, register, login, user };
