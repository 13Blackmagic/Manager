// Purpose: To seed the tag table in the database
const { Tag } = require('../models');
// Tag data
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];
// Bulk create the tag data
const seedTags = () => Tag.bulkCreate(tagData);
// Export the seedTags function
module.exports = seedTags;
