const express = require('express');
const router = express.Router();
const service = require('../services/sobaDodatneOpcijeService');

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await service.getDodatneOpcijeBySoba(req.params.id));
  } catch (err) {
    console.error(`Error while getting sobaDO.`, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await service.create(req.body));
  } catch (err) {
    console.error(`Error while getting sobaDO.`, err.message);
    next(err);
  }
});

module.exports = router;
