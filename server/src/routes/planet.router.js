import express from 'express';
import getallplanet from './planet.controller.js';



const planetrouter = express.Router()

planetrouter.get("/planets", getallplanet)


export default  planetrouter