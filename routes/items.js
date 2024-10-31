// routes/items.js

const express = require('express');
const router = express.Router();


const itemController = require('../controller/itemsController.js');

router.post('/', itemController.createItem);
router.get('/:id', itemController.getItem);
router.get('/', itemController.getAllItems);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);


module.exports = router; // Export the router
