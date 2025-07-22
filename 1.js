// const { values } = require("lodash");

// const { forEach } = require("lodash");

// console.log("Hello, world!");
// let arr = [1, 2, 3, 4, 5];
// // console.log(arr);

// // console.log(Math.sqrt(9));

// typeof arr;// "object"

// let newArr = arr.map((value, index) => {
//     value = value * 2;
//     return value;
// }

// );
// // reduce()求和
// let sum = newArr.reduce((acc, cur) => { // acc累加器 cur当前值
//     return acc + cur;
// }, 0);

//     arr.forEach((value, index) => {

//         value= value * 5;

//     }

// );

// console.log(sum);
// console.log(newArr);
// console.log();

// 1. map()方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
// 2. reduce()方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// 3. filter()方法创建一个新数组，其包含所有通过所提供的函数实现的测试的元素。
// 4. find()方法返回数组中满足提供的测试函数的第一个元素的值。
// 5. every()方法测试数组中所有元素是否都通过所提供的测试函数。
// 6.foreach()方法对数组的每个元素执行一次给定的函数。
// 7.some()方法测试数组中是否至少有一个元素通过所提供的测试函数。
// require('dayjs/locale/zh-cn');

// ****************************************************
// import _ from 'lodash'; // 导入lodash
// import dayjs from 'dayjs';// 导入dayjs
// let _data = dayjs().format('yyyy-MM-dd HH:mm:ss');
// console.log(_data);
// let dataNew=dayjs().month(6).date(18).locale('zh-cn').format('YYYY年M月D日');
// console.log(dataNew);
//     function Test()
//     {
//         // 定义一个wps范围对象
//     let rng_Obj=Range("a1").CurrentRegion
//         // 定义一个数组
//     let arr= rng_Obj.Value();
//         // 遍历行数组
//     arr.forEach((row,row_Index)=>{ // 第一次row=[12,12,13,14,15,16] row_Index=0
//         // 遍历行数组的列
//     row.forEach(
//         (cell_Val,col_Index)=>{ // 第一次cell_Val=12,col_Index=0
//         // 打印输出元素
//         console.log(`第${row_Index+1}行，第${col_Index+1}列:`,cell_Val)
//                 }
//                 )})
//     }

// ******************************************
// let arr = [[12, 12, 13, 14, 15, 16], [12, 12, 13, 14, 15, 16], [12, 12, 13, 14, 15, 16]];
// let arr2=arr.map((row,row_Index)=>{
//     return row.map((cell_Val,col_Index)=>{
//         return cell_Val*2;
//     })
// });
// // console.log(`第${row_Index+1}行，第${col_Index+1}列:`,cell_Val);
// // 返回新数组
// console.log(arr2);
// reduce()求和
// function demo_pro() {
//   let arr = [
//     [1, 2, 3],
//     [4, 5, 5],
//     [7, 8, 9],
//   ];
// let brr = arr.reduce((acc, cur, index, arr) => { // acc累加器 cur当前值 index当前索引 arr数组
//     // 执行语句
//     //	console.log(acc,cur,index,arr);
//     console.log(acc);
//     console.log(cur);
//     //		console.log(arr[index]);0,1,2运行完成
//     //		console.log(arr.value2);
//     // 数组3个，分三次运行
//     // 第一次 acc=0,cur=[1,2,3]；第二次运行 acc="01,2,3"，cur=[4,5,5]，第三次acc="01,2,34,5,5"，cur=[7,8,9]
//     // 第四次运行 acc="01,2,34,5,57,8,9"
//     return acc + cur;// 第一次运行完：acc+cur= "01,2,3"，第二次运行完：acc+cur="01,2,34,5,5"，第三次运行完：acc+cur="01,2,34,5,57,8,9"
//     // 把结果返回给brr数组
// }, "");
// reduce() 对数组进行累加，返回累加后的结果

//   let brr1 = arr.reduce(function (acc, cur, index, arr) {
//     // 执行语句
//     //	console.log(acc,cur,index,arr);
//     // console.log(acc);
//     // console.log(cur);
//     return acc + cur;
//   }, 0);
//   console.log(brr1);
// }

// console.log(demo_pro());
// const obj = { a: 1, b: 2, c: 3 };
// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key], index);
// a 1 0
// b 2 1
//   // c 3 2
// });
// Object.entries([1, 2, 3], [4, 5, 6]).flatMap((value) => {
//   console.log(value);
// });
// forEach([1, 2, 3], (value, index) => {
//   console.log(value, index);
// });
console.log(Math.pow(2, 3)); // 8
