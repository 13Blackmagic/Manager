const router = require('express').Router(); // Express.js router
const apiRoutes = require('./api'); // API routes
const path = require('path'); // Path module
// router.use('/', (req, res) => {
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export the router
module.exports = router;