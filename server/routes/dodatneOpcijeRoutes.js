const express = require('express');
const router = express.Router();
const dodatneOpcijeService = require('../services/dodatneOpcijeService');

// GET sobe
router.get('/', async function(req, res, next) {
  try {
    res.json(await dodatneOpcijeService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting dodatne opcije.`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await dodatneOpcijeService.getById(req.params.id));
  } catch (err) {
    console.error(`Error while getting dodatne opcije.`, err.message);
    next(err);
  }
});

module.exports = router;
