//1.Concatenate the two arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = arr1.concat(arr2);

//2.How to take arguments in sum function?

function sum(...num) {
  return num.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints

//3.How to pass arguments in sum function?

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // prints 6

//4. Swapping Values using the Destructuring Assignment
let a = 3;
let b = 6;
[a, b] = [b, a];

//5. Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

function sortBy(arr, str) {
  if (str === "Asc") {
    arr.sort(function (a, b) {
      return a - b;
    });
  } else if (str === "Desc") {
    arr.sort(function (a, b) {
      return b - a;
    });
  }
  return arr;
}

// 6.Write a function which returns array of usernames.
const users1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(arr) {
  return users1.map((a) => {
    return a.username;
  });
}

//7.Write a function which returns array of lengths of user names

const users2 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
function getUsernameLengths(arr) {
  return users2.map((a) => {
    return a.username.length;
  });
}

//8.Write a function which parses string integers. If it's not possible to
// parse, then add null

function parseInteger(arr) {
  return arr.map((a) => {
    if (isNaN(Number(a))) {
      a = null;
    } else {
      return Number(a);
    }
    return a;
  });
}

//9.Given an array, return a new array that only includes the numbers.

function filterArr(arr) {
  console.log(
    arr.filter((a) => {
      if (!isNaN(a)) {
        return typeof a === "number";
      }
    })
  );
}
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN]; // [1, 2, 55, 166]

//10.Write a function which remove users with language equals to 'ru'.

const users3 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(arr) {
  console.log(
    arr.filter((a) => {
      if (a.lang !== "ru") {
        return a;
      }
    })
  );
}

//11. Write a function which filters object by field.
const users4 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr, str) {
  console.log(
    arr.filter((a) => {
      if (a[str]) {
        return a;
      }
    })
  );
}

//12.Given an array, return the sum of numbers that are 18 or over.
const redArr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

// console.log(
//   redArr.reduce((a, b) => {
//     if (b > 18) {
//       a = a + b;
//     }

//     return a;
//   }, 0)
// );

//13. Write a function which calculates average age of users.

function getAverageAge(arr) {
  let existAge = 0;
  return arr.reduce((a, b) => {
    let age = b.age;
    if (age) {
      existAge++;
      a = a + age;
    }
    return a / existAge;
  }, 0);
}

const users5 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
console.log(getAverageAge(users5)); // 55
