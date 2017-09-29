const assert = require('assert');
const gp = require('./grouping_children.js');

describe('grouping children test', function(){

  it("1.2", () => {
    assert.equal(gp.pointsCoverSorted("1.2".split(' ').map((n) => parseFloat(n))).length, 1);
  });
  it("1.2 2.2", () => {
    assert.equal(gp.pointsCoverSorted("1.2 2.2".split(' ').map((n) => parseFloat(n))).length, 1);
  });
  it("1.2 2.3", () => {
    assert.equal(gp.pointsCoverSorted("1.2 2.3".split(' ').map((n) => parseFloat(n))).length, 2);
  });
  it("1.2 2.2 2.3 3.3 3.3", () => {
    assert.equal(gp.pointsCoverSorted("1.2 2.3".split(' ').map((n) => parseFloat(n))).length, 2);
  });

  it("1.2 1.8 2.1 2.2 3.3 5.6", () => {
    assert.equal(gp.pointsCoverSorted("1.2 1.8 2.1 2.2 3.3 5.6".split(' ').map((n) => parseFloat(n))).length, 3);
  });

});
