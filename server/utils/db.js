const mongoose = require("mongoose");

//gGUU62BSoHSOjAQU;

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {
	try {
		await mongoose.connect(URI);
		console.log("connection done");
	} catch (error) {
		console.log("data not connected");
		process.exit(0);
	}
};

module.exports = connectDb;
