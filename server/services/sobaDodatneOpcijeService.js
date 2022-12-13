const db = require('./db');
const helper = require('../helper');

async function getDodatneOpcijeBySoba(id = 0) {
  const rows = await db.query(
    `SELECT d.dodatne_opcije_id, d.naziv FROM dodatne_opcije d, soba_dodatne_opcije sdo
        WHERE sdo.dodatne_opcije_id = d.dodatne_opcije_id and sdo.soba_id = ${id}
        ORDER BY d.dodatne_opcije_id;`
  );

  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

async function create(sobaDodatneOpcije) {
  const result = await db.query(`INSERT INTO soba_dodatne_opcije(soba_id, dodatne_opcije_id)
                                    VALUES(${sobaDodatneOpcije.soba_id}, ${sobaDodatneOpcije.dodatne_opcije_id})`);

  let message = 'Error in creating sobaDodatneOpcije';

  if (result.affectedRows) {
    message = 'SobaDodatneOpcije created successfully';
  }

  return {message};
}

module.exports = {
  getDodatneOpcijeBySoba,
  create
}
