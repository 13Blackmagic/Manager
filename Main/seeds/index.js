const seedCategories = require('./category-seeds'); // Import the seedCategories function
const seedProducts = require('./product-seeds'); // Import the seedProducts function
const seedTags = require('./tag-seeds'); // Import the seedTags function
const seedProductTags = require('./product-tag-seeds'); // Import the seedProductTags function

const sequelize = require('../config/connection'); // Import the connection to the database from config/connection.js 
// Purpose: To seed the database with the data from the seed files
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};
// Call the seedAll function
seedAll();
