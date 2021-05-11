// Slice
if (!Array.prototype.newSlice) {
  Array.prototype.newSlice = function (start, end) {
    arr = this;
    console.log(this);
    let newArr = [];
    if (typeof end === "undefined") {
      for (let index = start; index < arr.length; index++) {
        newArr.push(arr[index]);
      }
    } else {
      for (let index = start; index < arr.length && index < end; index++) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  };
}
let sliceArr = ["bob", "gago", "pablito", "gaspar", "gaspar", "gaspar"];
