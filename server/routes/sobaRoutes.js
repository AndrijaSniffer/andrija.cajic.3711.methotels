const express = require('express');
const router = express.Router();
const sobaService = require('../services/sobaService');

// GET sobe
router.get('/', async function(req, res, next) {
  try {
    res.json(await sobaService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting sobe.`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await sobaService.getById(req.params.id));
  } catch (err) {
    console.error(`Error while getting soba.`, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await sobaService.create(req.body));
  } catch (err) {
    console.error(`Error while creating soba.`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await sobaService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating soba.`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await sobaService.deleteFun(req.params.id));
  } catch (err) {
    console.error(`Error while deleting soba.`, err.message);
    next(err);
  }
});

module.exports = router;
