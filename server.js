// server.js

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/items');
const route = require('./routes/route');
// const eh = require('./middleware/errorMiddleware');

const port = 8000;

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use('/items', itemRoutes); // Use the item routes
app.use('/', route); // Use the default routes

// app.use(eh);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at 0.0.0.0:${port}`);
});

module.exports = app; // Export the app for testing
