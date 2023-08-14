const express = require('express'); // Express.js server
const sequelize = require('./config/connection'); // Import the connection to the database from config/connection.js

const routes = require('./routes'); // Import the routes from routes/index.js

const app = express(); // Create the Express.js server
const PORT = process.env.PORT || 3001; // Set the port to 3001

app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse incoming string or array data

app.use(routes); // Use the routes
// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
