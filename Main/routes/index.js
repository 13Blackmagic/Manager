const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
// const { route } = require('./api');
// const inquirer = require('inquirer');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Starwars0819',
    database: 'ecommerce_db'
  },
  console.log(`Connected to the ecommerce_db database.`)
);

module.exports = router;