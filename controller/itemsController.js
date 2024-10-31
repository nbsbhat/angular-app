
const itemService = require('../service/itemService.js');

const itemController = {};

// Create (POST)
itemController.createItem = (req, res, next) => {
    try {
        return itemService.createItem(req, res);
    }
    catch (err) {
        next(err);
    }
};

// Read (GET)
itemController.getItem = (req, res) => {
    return itemService.getItem(req, res);
};

itemController.getAllItems = (req, res) => {
    return itemService.getAllItems(req, res);
};

// Update (PUT)
itemController.updateItem = (req, res) => {
    return itemService.updateItem(req, res);
};

// Delete (DELETE)
itemController.deleteItem = (req, res) => {
    return itemService.deleteItem(req, res);
};

module.exports = itemController;