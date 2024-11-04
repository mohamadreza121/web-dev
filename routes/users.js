
let express = require('express');
let router = express.Router();

// GET users listing
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Correctly export the router
module.exports = router;
