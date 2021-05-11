if (!Array.prototype.newFilter) {
  Array.prototype.newFilter = function (callBack) {
    let arr = this;
    let endArr = [];
    if (typeof callBack === "function") {
      for (let index = 0; index < arr.length; index++) {
        accumulator = callBack(arr[index], index, arr);
        if (accumulator === true) {
          endArr.push(arr[index]);
        }
      }
      return endArr;
    } else {
      return "is not function";
    }
  };
}
let arr = [1, 2, 3, 4];

function arrPlus(a) {
  return a > 1;
}

console.log(arr.newFilter(arrPlus));
