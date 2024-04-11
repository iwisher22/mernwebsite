require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const app = express();

const corsOptions = {
	origin: "http://localhost:5173",
	methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
	credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// app.get("/", (req, res) => {
// 	res.status(200).send("hello bro");
// });

// app.get("/register", (req, res) => {
// 	res.status(200).send("rigister");
// });

app.use(errorMiddleware);

const PORT = 5020;

connectDb().then(() => {
	app.listen(PORT, () => {
		console.log(`server is running ${PORT}`);
	});
});
