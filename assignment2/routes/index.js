let express = require('express');
let router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Existing routes
router.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
