// routes/route.js

const express = require('express');
const defaultRoute = express.Router();


const itemController = require('../controller/itemsController.js');

defaultRoute.get('/', itemController.get);

module.exports = defaultRoute; // Export the defaultRoute
