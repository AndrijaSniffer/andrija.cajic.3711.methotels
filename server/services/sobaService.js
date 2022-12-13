const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM soba LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM soba WHERE soba_id = ${id}`
  );
  const row = rows[0];

  const data = helper.emptyOrRow(row);
  return {
    data
  }
}

async function create(soba) {
  let sql = '';

  if (soba.opis === undefined) {
    sql = `INSERT INTO soba(naziv, broj_kreveta_za_odrasle, broj_kreveta_za_decu, jedinice, kvadratni_metri, opis)
        VALUES(\'${soba.naziv}\', ${soba.brojKrevetaZaOdrasle}, ${soba.brojKrevetaZaDecu}, ${soba.jedinice}, ${soba.kvadratniMetri}, null)`
  } else {
    sql = `INSERT INTO soba(naziv, broj_kreveta_za_odrasle, broj_kreveta_za_decu, jedinice, kvadratni_metri, opis)
        VALUES(\'${soba.naziv}\', ${soba.brojKrevetaZaOdrasle}, ${soba.brojKrevetaZaDecu}, ${soba.jedinice}, ${soba.kvadratniMetri}, \'${soba.opis}\')`
  }

  const result = await db.query(sql);

  let message = 'Error in creating soba';

  if (result.affectedRows) {
    message = 'Soba created successfully';
  }

  return {message};
}

async function update(id, soba) {
  let sql = `UPDATE soba SET `;

  if(soba.naziv !== undefined){
    sql = sql + `naziv = \'${soba.naziv}\'`;
  }

  if(soba.brojKrevetaZaOdrasle !== undefined){
    sql = sql + `, broj_kreveta_za_odrasle = ${soba.brojKrevetaZaOdrasle}`;
  }

  if(soba.brojKrevetaZaDecu !== undefined){
    sql = sql + `, broj_kreveta_za_decu = ${soba.brojKrevetaZaDecu}`;
  }

  if(soba.jedinice !== undefined){
    sql = sql + `, jedinice = ${soba.jedinice}`;
  }

  if(soba.kvadratniMetri !== undefined){
    sql = sql + `, kvadratni_metri = ${soba.kvadratniMetri}`;
  }

  if(soba.opis !== undefined){
    sql = sql + `, opis = \'${soba.opis}\'`;
  }

  sql = sql + `WHERE soba_id = ${id}`;

  const result = await db.query(sql);

  let message = 'Error in updating soba';

  if (result.affectedRows) {
    message = 'Soba updated successfully';
  }

  return {message};
}

async function deleteFunc(id = 0) {
  const result = await db.query(
    `DELETE FROM soba WHERE soba_id = ${id}`
  );

  let message = 'Error in deleting soba';

  if (result.affectedRows) {
    message = 'Soba deleting successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  getById,
  create,
  update,
  deleteFun: deleteFunc
}
