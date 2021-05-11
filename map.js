if (!Array.prototype.newMap) {
  Array.prototype.newMap = function (calBack) {
    let arr = this;
    if (typeof calBack === "function") {
      let newArr = [];
      for (const item of arr) {
        let calBackFunction = calBack(item);
        newArr.push(calBackFunction);
      }
      return newArr;
    } else {
      return "is not function";
    }
  };
}

let arr = [1, 2, 3, 4];

function arrPlus(a) {
  return (a = a + a);
}

console.log(arr.newMap(arrPlus));
