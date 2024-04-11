const { z } = require("zod");

const signupSchema = z.object({
	username: z
		.string({ required_error: "Name is  required" })
		.trim()
		.min(3, { message: "Name must be a atleast 3 character" })
		.max(255, { message: "Name must not be more than 255 character" }),

	email: z
		.string({ required_error: "Email is  required" })
		.trim()
		.email({ message: "Invalid email address" })
		.min(3, { message: "Email must be a atleast 3 character" })
		.max(255, { message: "Email must not be more than 255 character" }),

	phone: z
		.string({ required_error: "Phone no is  required" })
		.trim()
		.min(3, { message: "Phone must be a atleast 10 character" })
		.max(20, { message: "Phone must not be more than 20 character" }),
	password: z
		.string({ required_error: "password is  required" })
		.trim()
		.min(6, { message: "password must be a atleast 6 character" })
		.max(1024, { message: "password can not be graeter than 1024 character" }),
});

module.exports = signupSchema;
