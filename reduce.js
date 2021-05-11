if (!Array.prototype.newReduce) {
  Array.prototype.newReduce = function (callBack, currentVal) {
    let arr = this;
    if (typeof callBack === "function") {
      let i;
      let accumulator;
      if (typeof currentVal === "undefined") {
        accumulator = arr[0];
        i = 1;
      } else {
        accumulator = currentVal;
        i = 0;
      }
      //
      for (let index = i; index < arr.length; index++) {
        accumulator = callBack(accumulator, arr[index], index);
      }
      return accumulator;
      //
    } else {
      return "is not function";
    }
  };
}

let arr = [1, 2, 3, 4];

function arrPlus(a, b) {
  return a + b;
}

console.log(arr.newReduce(arrPlus,5));
