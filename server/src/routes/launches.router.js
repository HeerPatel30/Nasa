import express from "express";
import getalllaunches from "./launches.controller.js";

const launchesrouter = express.Router();

launchesrouter.get("/launches", getalllaunches);

export default launchesrouter;
