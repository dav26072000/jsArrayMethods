if (!Array.prototype.newFind) {
  Array.prototype.newFind = function (calBack) {
    let arr = this;
    if (typeof calBack === "function") {
      for (let index = 0; index < arr.length; index++) {
        if (calBack(arr[index], index, arr)) {
          return arr[index];
        }
      }
      return undefined;
    } else {
      return "is not function";
    }
  };
}

let arr = [1, 2, 3, 4];
let list = [{ name: "jake" }, { name: "mike", age: 25 }];
console.log(list.newFind((a) => a.name === "mike"));
