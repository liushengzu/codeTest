/**
 * @example 示例1：获取A1单元格的当前所属区域
 * let currentRegion = Application.ActiveSheet.Range("A1").CurrentRegion;
 * 
 * @example 示例2：获取A1:C10单元格的当前值
 * let currentValue = Application.ActiveSheet.Range("A1:C10").Value2;
 * let currentValue2 = Application.ActiveSheet.Range("A1:C10")(); // 等价于Value2
 * 
 * @example 示例3：在A1单元格中输入一个数组，根据数组的长和宽自动调整单元格的大小
 * let array = [["value1", "value2"], ["value3", "value4"]];
 * Application.ActiveSheet.Range("A1").Resize(array.length, array[0].length).Value2 = array;
 * 
 * @example 示例4：获取A1单元格的行号和列号
 * let row = Application.ActiveSheet.Range("A1").Row;
 * let column = Application.ActiveSheet.Range("A1").Column;
 * 
 * @example 示例5：获取A1单元格的向右偏移1列向下偏移3行的单元格
 * let cell = Application.ActiveSheet.Range("A1").Offset(3, 1);
 * 
 * @example 示例6：复制A1:B19单元格的内容到C2:D20单元格
 * Application.ActiveSheet.Range("A1:B19").Copy();
 * Application.ActiveSheet.Range("C2:D20").PasteSpecial(xlPasteAll);
 * 
 * @example 示例7：获取当前选定区域
 * let selectedRange = Application.Selection;
 * 
 * @example 示例8：获取当前工作表的名称
 * let sheetName = Application.ActiveSheet.Name;
 * 
 * @example 示例9：获取当前工作表的索引
 * let sheetIndex = Application.ActiveSheet.Index;
 * 
 * @example 示例10：添加一个新的工作表并设置名称
 * let newSheet = Application.ActiveWorkbook.Sheets.Add();
 * newSheet.Name = "新工作表";
 * 
 * @example 示例11：删除当前工作表
 * Application.ActiveSheet.Delete();
 * 
 * @example 示例12：保护当前工作表
 * let sheetProtectOptions = { AllowDeletingColumns: true, AllowDeletingRows: true, AllowFiltering: true, AllowFormattingCells: true, AllowFormattingColumns: true, AllowFormattingRows: true, AllowInsertingColumns: true, AllowInsertingRows: true, AllowSorting: true, AllowUsingPivotTables: true, Password: "password", DrawingObjects: true, Contents: true, Scenarios: true, UserInterfaceOnly: true };
 * Application.ActiveSheet.Protect(sheetProtectOptions);
 * 
 * @example 示例13：解除当前工作表的保护
 * Application.ActiveSheet.Unprotect("password");
 * 
 * @example 示例14：获取当前工作表的行数和列数
 * let rowCount = Application.ActiveSheet.Rows.Count;
 * let columnCount = Application.ActiveSheet.Columns.Count;
 * 
 * @example 示例15：获取当前工作表的已使用区域
 * let usedRange = Application.ActiveSheet.UsedRange;
 * 
 * @example 示例16：获取当前工作表的合并区域
 * let mergedCells = Application.ActiveSheet.UsedRange.MergeCells;
 * 
 * @example 示例17：获取当前工作表的打印区域
 * let printArea = Application.ActiveSheet.PageSetup.PrintArea;
 * 
 * @example 示例18：设置当前工作表的打印区域
 * Application.ActiveSheet.PageSetup.PrintArea = "A1:B19";
 * 
 * @example 示例19：关闭当前工作表
 * Application.ActiveSheet.Close(false); // 关闭当前工作表，不保存
 * 
 * @example 示例20：获取当前工作簿的名称
 * let workbookName = Application.ActiveWorkbook.Name 
 * 
 * @example 示例21：获取当前工作簿的路径
 * let workbookPath = Application.ActiveWorkbook.Path;
 * 
 * @example 示例22：获取当前工作簿的工作表数量
 * let sheetCount = Application.ActiveWorkbook.Sheets.Count;
 * 
 * @example 示例23：保存当前工作簿
 * Application.ActiveWorkbook.Save();
 * 
 * @example 示例24：另存为当前工作簿
 * Application.ActiveWorkbook.SaveAs("C:\\Users\\yourusername\\Desktop\\另存为的工作簿名称.xlsx");
 * 
 * @example 示例25：关闭当前工作簿
 * Application.ActiveWorkbook.Close(false); // 关闭当前工作簿，不保存
 * 
 * @example 示例26：对A1:H21单元格进行筛选
 * Application.ActiveSheet.Range("A1:H21").AutoFilter(2, ["value1", "value2"], xlFilterValues);
 * 
 * @example 示例27：对当前筛选区域（假设为A1:H21）进行排序，排序依据为D列，降序排列
 * Application.ActiveSheet.AutoFilter.Sort.SortFields.Add(Application.ActiveSheet.Range("D2:D21"), xlSortOnValues, xlDescending, xlPinYin);
 * Application.ActiveSheet.AutoFilter.Sort.Apply();
 * 
 * @example 示例28：创建WPS对象
 * let wpsApp = CreateObject("kwps.application");
 * 
/**
 * @example 示例29：创建WPS文档对象
 * let wpsDoc = wpsApp.Documents.Add();
 */

import { range } from "lodash";

/**
 * @example 示例30：在A1：K20区域的每个单元格中输入随机数（0-100）
 * function fillRandomArray() {
 *		// 生成一个对应大小的数组来存放随机数并填入单元格区域，获取单元格区域的行数和列数以确定填入数组的大小
 *		let rowCount = Application.ActiveSheet.Range("A1:K20").Rows.Count;
 *		let columnCount = Application.ActiveSheet.Range("A1:K20").Columns.Count;
 *		// 定义一个数组，用于存放随机数
 *		let randomArray = [];
 *		// 循环生成随机数，并填入数组
 *		for (let i = 0; i < rowCount; i++) {
 *			let rowArray = [];
 *			for (let j = 0; j < columnCount; j++) {
 *				// 生成0到100之间的随机整数
 *				rowArray.push(Math.floor(Math.random() * 101));
 *			}
 *			// 将生成的行数组添加到主数组中
 *			randomArray.push(rowArray);
 *		}
 *		// 填入数组到单元格区域（A1:K20）
 *		Application.ActiveSheet.Range("A1:K20").Value2 = randomArray;
 * }
 * // 调用函数填充随机数
 * fillRandomArray();
 */

/**
 * @example 示例31：对A1：K20单元格的值进行逐行求和，每行的第一个值累加1次，第二个值累加2次，以此类推，输出到L列（L1开始）
 * function sumRow() {
 *		// 获取单元格区域的值
 *		let valueArray = Application.ActiveSheet.Range("A1:K20").Value2;
 *		// 定义一个数组，用于存放累加值
 *		let sumArray = [];
 *		// 循环遍历每行的值，并累加
 *		for (let i = 0; i < valueArray.length; i++) {
 *			let sum = 0;
 *			for (let j = 0; j < valueArray[i].length; j++) {
 *				// 每行的第一个值累加1次，第二个值累加2次，以此类推
 *				sum += valueArray[i][j] * (j + 1);
 *			}
 *			// 输出区域为L1：L20，输出前需要把sumArray输出为二维数组，每行一个元素
 *			sumArray.push([sum]);
 *		}
 *		// 输出累加值到单元格区域（确定起始位置为L1，使用Resize调整单元格大小）
 *		Application.ActiveSheet.Range("L1").Resize(sumArray.length, 1).Value2 = sumArray;
 * }
 * // 调用函数进行逐行求和
 * sumRow();
 */
function test() {
const array=[["a", "12"], ["b", "12"]];
    /* Range("a1").offset(1, 1)*/
    console.log(array);
    console.log(array.length);
    console.log("HELLO WORLD");
}

// 声明一维数组
const arr = [10, 20, 30];

// 基础解构 赋值=解构
const [a, b] = arr; // a=10, b=20

// 跳过元素 跳过元素解构
const [x, , z] = arr; // x=10, z=30

// 剩余参数 剩余参数解构
const [first, ...rest] = arr; // first=10, rest=[20,30]

// 声明二维数组
const matrix = [
    [1, 2],
    [3, 4]
  ];
  
  // 解构嵌套数组
  const [[a,b], [c,d]] = matrix; // a=1,b=2,c=3,d=4
  
  // 混合解构 =混合赋值
  const [row1, row2] = matrix; // row1=[1,2], row2=[3,4]
  const [ [x], [y] ] = matrix; // x=1, y=3


  const table = [
    ["姓名", "年龄"],
    ["张三", 20],
    ["李四", 25]
  ];
  
  // 解构表头和数据
  const [header, ...rows] = table;
  // header=["姓名","年龄"]
  // rows=[ ["张三",20], ["李四",25] ]
  
  // 处理每行数据
  rows.forEach(([name, age]) => {
    console.log(`${name}今年${age}岁`);
  });

// 获取工作表名称
function test4 {
    var wb=[];
    wb = Application.Workbooks("工作簿名称.xlsx").Sheets;
    wb.forEach(ws => {
        var sheet=ws;
        console.log(sheet.Name);

        }
    )
}
// 获取工作表中所有的图片
function test5 {
    var wb=[];
    wb = Application.Workbooks("工作簿名称.xlsx").Sheets;
    wb.forEach(ws => {
        var sheet=ws;
        var pictures=sheet.Pictures();
        pictures.forEach(pic => {
            console.log(pic.Name);
            }
        )
        }
    )
}
// 获取工作表中所有的公式
function test6 {
    var wb=[];
    wb = Application.Workbooks("工作簿名称.xlsx").Sheets;
    wb.forEach(ws => {
        var sheet=ws;
        var formulas=sheet.Formulas();
        formulas.forEach(formula => {
            console.log(formula.Formula);
            }
        )
        }
    )
}
// 获取工作表中所有的链接
function test7 {
    var wb=[];
    wb = Application.Workbooks("工作簿名称.xlsx").Sheets;
    wb.forEach(ws => {
        var sheet=ws;
        var links=sheet.Hyperlinks();
        links.forEach(link => {
            console.log(link.Address);
            }
        )
        }
    )
}
// 获取工作表中所有的注释
function test8 {
    var wb=[];
    wb = Application.Workbooks("工作簿名称.xlsx").Sheets;
    wb.forEach(ws => {
        // 获取工作表对象
        var sheet=ws;
        // 获取工作表中所有的注释
        // 遍历注释
        comments.forEach(comment => {
            // 输出注释内容
            console.log(comment.Text);
            }
        )
        }    
    )
}               
// 批量导出图片
function 批量导出图片 {
    var wb=[];
    [...ActiveSheet.Shapes].forEach((shape,i)=>{ 
        shape.SaveAsPicture( "C:\\Users\\Administrator\\Desktop\\test\\"+i+".png")
        })
        }
        // 批量导出公式
        function 批量导出公式 () {
            var wb=[];

            const r=ActiveSheet.Range("A1:A100").RangeEX
            // 类的表示方法
            // 类对象的表示方法
            ActiveSheet.Range("A1:A100").RangeEX
            // [...ActiveSheet.range].forEach((cell,i)=>{ 
                console.log(cell.formula)；
             // 举例遍历列表的方法
             // map方法
             // forEach方法
                // filter方法
                // reduce方法
                // sort方法
                // find方法
                // findIndex方法
                // includes方法
                // indexOf方法
                // lastIndexOf方法
                // some方法
                // every方法
                // join方法
                // keys方法
                // values方法
    // entries方法
    // 获取数据区域
    // 并更改属性
    function test5(){

        // ******************************* 
        //第一种写法   
        // arr=ActiveSheet.Range("A1:d22").Value();
        // arr.forEach(item => {
        //     item.forEach(item2 => {
        //         console.log(item2); // 输出数组元素
        //     });
        //     }
        // *********************************
        // 第二种写法
        // arr=ActiveSheet.Range("A1:d22").Value();
            // arr.forEach(item => {
                // for(let i of item)
                // console.log(i); })
        // 输出数组元素
        // ********************************
        const d_range=ActiveSheet.Range("a1:d22");
        const cells=d_range.Cells;
        // 遍历单元格
        Array.from(d_range.Cells).forEach(cell => {
        // // 创建一个数组，包含范围内所有单元格
        // const totalCells = cells.Count;
        // const cellArray = Array.from({ length: totalCells }, (_, i) => cells.Item(i + 1));
        // cellArray.forEach(cell => {
            // 根据单元格值设置不同的格式
            if (cell.Value2 < 15) {
                // 负值显示为红色
                cell.Font.Color = 255; // 红色
                cell.Font.Bold = true;
            } else if (cell.Value2 > 20) {
                // 大值显示为绿色
                cell.Font.Color = 5287936; // 绿色
            } else {
                // 其他值使用默认黑色
                cell.Font.Color = 0; // 黑色
            }
                    // 复制range(a1:d22)到另一个区域(e1:h22)
                    ActiveSheet.Range("a1:d22").Copy();
                    ActiveSheet.Range("e1:h22").PasteSpecial(xlPasteAll);
        
            }
        )
     }



    
     range("A1").CurrentRegion.Resize(2, 2).Value2 = [["a", "b"], ["c", "d"]];
     