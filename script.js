let a = 10;
arr = [1, 2, 3, 4, 5];
console.log(a);
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
}
console.log(a);
// Uncaught
// TypeError:
// Cannot read properties of undefined (reading 'offset')
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
console.log(Object.keys(arr));
