const assert = require('assert');
const mod = require('../max_pairwise_product.js');

describe('maxPairwiseProduct test', function(){

  it("配列が2件", () => {
    const arr = [3, 9];
    assert.equal(mod.maxPairwiseProduct(arr), 27);
  });

  it("配列が3件", () => {
    const arr = [3, 9, 2999];
    assert.equal(mod.maxPairwiseProduct(arr), 2999 * 9);
  });

  it("配列が10件", () => {
    const arr = "7 5 14 2 8 8 10 1 2 3".split(' ').map((n) => parseInt(n));
    assert.equal(mod.maxPairwiseProduct(arr), 14 * 10);
  });

  it("0を含む", () => {
    const arr = "4 0 0".split(' ').map((n) => parseInt(n));
    assert.equal(mod.maxPairwiseProduct(arr), 4 * 0);
  });

  it("同じ数を含む", () => {
    const arr = "7 5 14 2 8 14 10 1 14 3".split(' ').map((n) => parseInt(n));
    assert.equal(mod.maxPairwiseProduct(arr), 14 * 14);
  });

  it("すべて同じ数", () => {
    const arr = "99 99 99".split(' ').map((n) => parseInt(n));
    assert.equal(mod.maxPairwiseProduct(arr), 99 * 99);
  });

  it("大きな数値", () => {
    const arr = "999999 999998 99".split(' ').map((n) => parseInt(n));
    assert.equal(mod.maxPairwiseProduct(arr), 999999 * 999998);
  });

  it("ストレステスト", () => {
    for(let i = 0; i < 10000; i++){
      let arr = [];
      const num = Math.floor(Math.random() * (100 + 1 - 2) ) + 2;
      for(let j = 0; j < num; j++){
        // 0 ～ 100000 の範囲の数値を使用
        arr.push(Math.floor( Math.random() * (100000 - 0 + 1) ) + 0);
      }
      const resultSlow = mod.maxPairwiseProductSlow(arr);
      const resultFast = mod.maxPairwiseProduct(arr);

      assert.equal(resultSlow, resultFast, `[input arr: ${arr}]`);
    }
  });

  it("ストレステスト - 件数100000件", () => {
    let arr = [];
    const num = Math.floor(Math.random() * (100000 + 1 - 2) ) + 2;
    for(let j = 0; j < num; j++){
      // 0 ～ 100000 の範囲の数値を使用
      arr.push(Math.floor( Math.random() * (100000 - 0 + 1) ) + 0);
    }
    const resultSlow = mod.maxPairwiseProductSlow(arr);
    const resultFast = mod.maxPairwiseProduct(arr);

    assert.equal(resultSlow, resultFast, `[input arr: ${arr}]`);
  });

});