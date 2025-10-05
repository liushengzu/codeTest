let arr1 = [1, 2, 3, 4];
let col_J = 1;
let accumulator = arr1.reduce(
  (acc, row, r) => {
    if (r === 0) return acc;

    const qty = Number(row[col_J]) || 1;
    const startRow = acc.result.length + 1;
    acc.groups.push({
      startRow,
      count: qty,
      colorIdx: acc.colorIdx,
    });
    for (let r = 0; r < qty; r++) {
      const row = [1, 2, 3, 4];
      const newRow = [...row];
      newRow[col_J] = r + 1;
      acc.result.push(newRow);
    }
    let colors = ["red", "green", "blue"];
    acc.colorIdx = (acc.colorIdx + 1) % colors.length;
    return acc;
  },
  {
    result: [Headers],
    groups: [],
    colorIdx: 0,
  }
);
console.log(accumulator);
