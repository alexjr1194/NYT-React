const router = require('express').Router();
// const articleController = require('../../controllers/articleController');

// Matches with /api/articles
router.route('/')
  .get(function(req, res) {
    res.json({"trying to get": "a book"});
    }
  )
  .post(function(req, res) {
    res.json(req.body);
  })

// Matches with /api/articles/:id
router.route('/:id')
  .get(function(req, res) {
    res.json({"fetching article with id": parseInt(req.params.id)});
  })

module.exports = router;
