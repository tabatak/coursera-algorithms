const assert = require('assert');
const fibonacci = require('./fibonacci.js');

describe('fibonacci test', function(){

  it("F0", () => {
    assert.equal(fibonacci.fibonacciNaive(0), 0);
    assert.equal(fibonacci.fibonacci(0), 0);
  });
  it("F1", () => {
    assert.equal(fibonacci.fibonacciNaive(1), 1);
    assert.equal(fibonacci.fibonacci(1), 1);
  });
  it("F2", () => {
    assert.equal(fibonacci.fibonacciNaive(2), 1);
    assert.equal(fibonacci.fibonacci(2), 1);
  });
  it("F3", () => {
    assert.equal(fibonacci.fibonacciNaive(3), 2);
    assert.equal(fibonacci.fibonacci(3), 2);
  });
  it("F5", () => {
    assert.equal(fibonacci.fibonacciNaive(5), 5);
    assert.equal(fibonacci.fibonacci(5), 5);
  });
  it("F10", () => {
    assert.equal(fibonacci.fibonacciNaive(10), 55);
    assert.equal(fibonacci.fibonacci(10), 55);
  });
  it("F20", () => {
    assert.equal(fibonacci.fibonacciNaive(20), 6765);
    assert.equal(fibonacci.fibonacci(20), 6765);
  });

});