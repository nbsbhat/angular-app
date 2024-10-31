// server.js

const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/items');
const eh = require('./middleware/errorMiddleware');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use('/items', itemRoutes); // Use the item routes

app.use(eh);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export the app for testing
