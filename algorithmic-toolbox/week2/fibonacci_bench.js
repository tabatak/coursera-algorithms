const fibonacci = require('./fibonacci.js');

const num = 30;
const func = () => {
  fibonacci.fibonacci(num);
}
const funcNaive = () => {
  fibonacci.fibonacciNaive(num);
}

exports.time = 1000;
exports.compare = {
  fibonacci: func,
  fibonacciNaive: funcNaive
} 
require("bench").runMain()