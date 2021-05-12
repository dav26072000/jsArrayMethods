// SPLICE

if (!Array.prototype.newSplice) {
  Array.prototype.newSplice = function (start, end, item) {
    let arr = this;
    let newArr = [];

    if (typeof end === "undefined") {
      for (let index = start; index < arr.length; index++) {
        newArr.push(arr[index]);
      }
    } else if (typeof item === "undefined") {
      if (end >= arr.length) {
        for (let j = 0; j < arr.length; j++) {
          newArr.push(arr[j]);
        }
        arr.length = 0;
        return newArr;
      }
      for (
        let index = start;
        index < arr.length && index < end + start;
        index++
      ) {
        newArr.push(arr[index]);
      }
    } else {
      if (start >= arr.length) {
        arr.push(item);
        return [];
      }
      if (end >= arr.length) {
        for (let j = 0; j < arr.length; j++) {
          newArr.push(arr[j]);
        }
        arr.length = 0;
        arr.push(item);
        return newArr;
      }

      for (
        let index = start;
        index < arr.length && index < end + start;
        index++
      ) {
        newArr.push(arr[index]);
        arr[index] = item;
      }
      return [item];
    }
    return newArr;
  };
}
let sliceArr = ["bob", "gago", "pablito", "gaspar", "gaspar", "gaspar"];

console.log(sliceArr.newSplice(0, 7));
// console.log(sliceArr.splice(0, 7));
console.log(sliceArr);
