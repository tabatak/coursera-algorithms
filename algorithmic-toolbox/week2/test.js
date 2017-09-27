const assert = require('assert');
const fibonacci = require('./fibonacci.js');
const gcd = require('./greatest_common_divisor.js');

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

describe('Greatest Common Divisor test', function(){
  
    it("0 0", () => {
      assert.equal(gcd.gcdNv(0, 0), 0);
      assert.equal(gcd.gcd(0, 0), 0);
    });
    it("1 2", () => {
      assert.equal(gcd.gcdNv(1, 2), 1);
      assert.equal(gcd.gcd(1, 2), 1);
    });
    it("5 7", () => {
      assert.equal(gcd.gcdNv(5, 7), 1);
      assert.equal(gcd.gcd(5, 7), 1);
    });
    it("2 10", () => {
      assert.equal(gcd.gcdNv(2, 10), 2);
      assert.equal(gcd.gcd(2, 10), 2);
    });
  
    it("ストレステスト", () => {
      for(let i = 0; i < 100; i++){
        const a = Math.floor(Math.random() * (1000000 + 1 - 0) ) + 0;
        const b = Math.floor(Math.random() * (1000000 + 1 - 0) ) + 0;
        const resultSlow = gcd.gcdNv(a, b);
        const resultFast = gcd.gcd(a, b);
  
        assert.equal(resultSlow, resultFast, `[input a: ${a}, b: ${b}]`);
      }
    });
  
  });