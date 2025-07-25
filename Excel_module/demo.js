/* 计算指定单元格范围内符合条件的单元格的总和*/

import { forEach } from "lodash";

function sumByFillColor(sheetName, rangeAddress, targetColor) {
  try {
    // 获取指定的工作表
    var sheet = Application.ActiveWorkbook.Sheets(sheetName);
    if (!sheet) {
      throw new Error("未找到工作表: " + sheetName);
    }
    // 获取指定的单元格范围
    var range = sheet.Range(rangeAddress);
    if (!range) {
      throw new Error("未找到范围: " + rangeAddress);
    }
    var total = 0;
    // 使用 foreach 遍历范围内的每个单元格
    [...range].forEach((cell) => {
      // 获取单元格的填充颜色
      var cellColor = cell.Interior.Color;
      // 检查单元格颜色是否与目标颜色匹配
      if (cellColor === targetColor) {
        // 将符合条件的单元格值加入总和
        total += cell.Value2 || 0; // 如果单元格为空，默认值为0
      }
    });
    return total;
  } catch (e) {
    // 捕获并显示错误信息
    alert("发生错误: " + e.message);
  }
}
// 示例用法
function demo() {
  var sheetName = "Sheet1"; // 目标工作表名称
  var rangeAddress = "A1:A10"; // 目标单元格范围
  var targetColor = 255; // 红色的 RGB 值
  var result = sumByFillColor(sheetName, rangeAddress, targetColor);
  alert("符合条件的单元格总和为: " + result);
}
let array = [1, 2, 3, 4];
array.forEach((element) => {
  console.log(element);
});
