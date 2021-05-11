if (!Array.prototype.newEvery) {
  Array.prototype.newEvery = function (calBack) {
    let arr = this;
    if (typeof calBack === "function") {
      for (let index = 0; index < arr.length; index++) {
        if (!calBack(arr[index], index, arr)) {
          return false;
        }
      }
      return true;
    } else {
      return "is not function";
    }
  };
}

let arr = [1, 2, 3, 4];

console.log(arr.newEvery((a) => a === 25));
