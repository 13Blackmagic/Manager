const router = require('express').Router(); // Express.js router
const categoryRoutes = require('./category-routes'); // Category routes
const productRoutes = require('./product-routes'); // Product routes
const tagRoutes = require('./tag-routes'); // Tag routes

router.use('/categories', categoryRoutes); // Use the category routes
router.use('/products', productRoutes); // Use the product routes
router.use('/tags', tagRoutes); // Use the tag routes
// Export the router
module.exports = router;
