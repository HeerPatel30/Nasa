import express from 'express';
import getallplanet from './planet.controller';

const app = express()

const planetrouter = app.route()

planetrouter.get("/planets", getallplanet)