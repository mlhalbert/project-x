const router = require('express').Router();
const { Bootcamp } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('bootcamp', { 
      greeting: 'hello world!'
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
