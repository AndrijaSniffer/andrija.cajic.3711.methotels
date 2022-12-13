function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function emptyOrRow(row) {
  if (row === {}) {
    return {};
  }
  return row;
}

module.exports = {
  getOffset,
  emptyOrRows,
  emptyOrRow
}
