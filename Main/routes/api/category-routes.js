// Dependencies
const router = require('express').Router(); // Express.js router
const { Category, Product } = require('../../models'); // Category and Product models

// Purpose: To get all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories)) // Return all categories
    .catch((err) => res.status(500).json(err)); // Return error if there is one
});
// Purpose: To get a single category by id
router.get('/:id', (req, res) => { 
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    // Return the category with the specified id
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});
// Purpose: To create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});
// Purpose: To update a category by id
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});
// Purpose: To delete a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});
// Export the router
module.exports = router;
