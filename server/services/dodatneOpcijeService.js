const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM dodatne_opcije LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getById(id = 0) {
  const rows = await db.query(
    `SELECT * FROM dodatne_opcije WHERE dodatne_opcije_id = ${id}`
  );
  const row = rows[0];

  const data = helper.emptyOrRow(row);
  return {
    data
  }
}

module.exports = {
  getMultiple,
  getById
}
