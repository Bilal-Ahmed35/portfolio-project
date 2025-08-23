// console.log("Bilal");
// console.log("BIlal " + (15 - 10));
// console.log(`BIlal ${15 - 10}`);

// let bilal = {
//   age: 22,
//   height: 5.7,
//   gender: "male",
//   status: "engaged",
//   alive: "true",
//   arr: ["name", 22, null],
// };

// console.log(bilal.arr[1]);

// let arr = ["bilal", "wasay", 22, true, null];

// console.log(arr[0], arr[4], arr[2]);
// console.log(arr);

// function creatingCourses(courseName) {
//   console.log("creating " + courseName);
// }
// creatingCourses("dsa");
// creatingCourses("java");
// creatingCourses("op");

let sum = function (a, b) {
  return a + b;
};

let diff = function (a, b) {
  return a - b;
};

function operate(operationFn, a, b) {
  return operationFn(a, b);
}

console.log(operate(sum, 2, 3));
console.log(operate(diff, 2, 3));
