import express from "express";
import handleErrors from "@middleware/errorHandler";
import routes from "@routes/api";

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use("/", routes);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(handleErrors);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
//
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	});rr
// }

// Initialization
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
