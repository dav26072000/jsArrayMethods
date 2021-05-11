if (!Array.prototype.newForEach) {
  Array.prototype.newForEach = function (calBack) {
    let arr = this;
    if (typeof calBack === "function") {
      for (const item of arr) {
        calBack(item);
      }
    } else {
      return "is not function";
    }
  };
}

let arr = [1, 2, 3, 4, 5];
let newArr = [];
function arrPlus(a) {
  if (a > 2) {
    console.log(a);
    newArr.push(a);
  }
}
arr.newForEach(arrPlus);
console.log(newArr);
