// const plus = (num1, num2) => num1 + num2;
const plus = x => x + 1;
const subtract = x => x - 2;
const multiply = x => x * 3;
const divide = x => x / 2;;

// reduce 
const compose = (...fns) => fns.reduce((a, b) => (argv) => a(b(argv)));

// 递归
// const compose = (...fns) => {
//   let result = undefined;
//   return function cb(argv) {
//     if (fns.length < 1) {
//       return result;
//     }
//     const fn = fns.pop();
//     result = fn(argv);
//     return cb(result);
//   }
// }

// 迭代
// const compose = (...fns) => {
//   let result = undefined;
//   return function (argv) {
//     result = argv;
//     while (fns.length) {
//       const fn = fns.pop();
//       result = fn(result);
//     }
//     return result;
//   }
// }

const run = compose(divide, multiply, subtract, plus)(12);

console.log(run);