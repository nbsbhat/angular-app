
const itemService = {};

// In-memory data store
let items = [];

// Create (POST)
itemService.createItem = (req, res) => {
    if(req.body && !req.body.name)
        throw('item name is empty');
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
};

// Read (GET)
itemService.get = (req, res) => {
    res.status(200).json({'message': 'welcome to this service'});
}

itemService.getAllItems = (req, res) => {
    if(items.length == 0)
        res.json({'message': 'there are no items this time!'});

    res.json(items);
};

itemService.getItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
};

// Update (PUT)
itemService.updateItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    res.json(item);
};

// Delete (DELETE)
itemService.deleteItem = (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
};

module.exports = itemService;