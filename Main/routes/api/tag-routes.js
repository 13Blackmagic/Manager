const router = require('express').Router(); // Express.js router
const { Tag, Product, ProductTag } = require('../../models'); // Tag, Product, and ProductTag models
// The `/api/tags` endpoint
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    // Return all tags
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});
// Purpose: To get a single tag by id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tag) => res.status(200).json(tag)) // Return the tag with the specified id
    .catch((err) => res.status(404).json(err)); // Return error if there is one
});
// Purpose: To create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});
// Purpose: To update a tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  // Return the updated tag
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});
// Purpose: To delete a tag by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});
// Export the router
module.exports = router;
