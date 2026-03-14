import express from "express";
import authRoute from "./routes/auth.routes.js";
import hanldeError from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());


app.use("/api/auth", authRoute);

app.use(hanldeError);

export default app;