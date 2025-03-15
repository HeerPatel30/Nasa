import express from "express";
import planetrouter from "./routes/planet.router.js";
import cors from "cors";
import morgan from "morgan"
import launchesrouter from "./routes/launches.router.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan('combined'))
app.use(planetrouter);
app.use(launchesrouter)

export default app;
