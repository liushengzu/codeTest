// /* 计算指定单元格范围内符合条件的单元格的总和*/

// const { forEach } = require("lodash");

// function sumByFillColor(sheetName, rangeAddress, targetColor) {
//   try {
//     // 获取指定的工作表
//     var sheet = Application.ActiveWorkbook.Sheets(sheetName);
//     if (!sheet) {
//       throw new Error("未找到工作表: " + sheetName);
//     }
//     // 获取指定的单元格范围
//     var range = sheet.Range(rangeAddress);
//     if (!range) {
//       throw new Error("未找到范围: " + rangeAddress);
//     }
//     var total = 0;
//     // 使用 foreach 遍历范围内的每个单元格
//     [...range].forEach((cell) => {
//       // 获取单元格的填充颜色
//       var cellColor = cell.Interior.Color;
//       // 检查单元格颜色是否与目标颜色匹配
//       if (cellColor === targetColor) {
//         // 将符合条件的单元格值加入总和
//         total += cell.Value2 || 0; // 如果单元格为空，默认值为0
//       }
//     });
//     return total;
//   } catch (e) {
//     // 捕获并显示错误信息
//     alert("发生错误: " + e.message);
//   }
// }
// // 示例用法
// function demo() {
//   var sheetName = "Sheet1"; // 目标工作表名称
//   var rangeAddress = "A1:A10"; // 目标单元格范围
//   var targetColor = 255; // 红色的 RGB 值
//   var result = sumByFillColor(sheetName, rangeAddress, targetColor);
//   alert("符合条件的单元格总和为: " + result);
// }
let arr1 = [1, 2, 3, 4];
let col_J = 1;
const accumulator = arr1.reduce(
  (acc, row, r) => {
    if (r === 0) return acc;
    const qty = Number(row[col_J]) || 1;
    const startRow = acc.result.length + 1;
    acc.groups.push({
      startRow,
      count: qty,
      colorIdx: acc.colorIdx,
    });
    // 使用for改写
    // let row=[1,2,3,4]
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
