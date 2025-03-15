import express from "express";
import { httpaddlaunch, httpgetalllaunches } from "./launches.controller.js";
import { httpAbortlaunch } from "../model/launches.models.js";

const launchesrouter = express.Router();

launchesrouter.get("/launches", httpgetalllaunches);
launchesrouter.post("/launches", httpaddlaunch);
launchesrouter.delete("/launches/:id", httpAbortlaunch);

export default launchesrouter;
