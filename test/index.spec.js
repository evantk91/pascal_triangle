let assert = require('assert');
let { nthRowPascal } = require('../index');

describe('nth row pascal function tests', () => {
   it('returns the row when n = 0', () => {
      let n = 0;
      let solution = [1];
      assert.deepEqual(solution, nthRowPascal(n));
   });

   it('returns the row when n = 1', () => {
      let n = 1;
      let solution = [1, 1];
      assert.deepEqual(solution, nthRowPascal(n));
   });
   
   it('returns the row when n = 2', () => {
      let n = 2;
      let solution = [1, 2, 1];
      assert.deepEqual(solution, nthRowPascal(n));
   });

   it('returns the row when n = 3', () => {
      let n = 3;
      let solution = [1, 3, 3, 1];
      assert.deepEqual(solution, nthRowPascal(n));
   });

   it('returns the row when n = 4', () => {
      let n = 4;
      let solution = [1, 4, 6, 4, 1];
      assert.deepEqual(solution, nthRowPascal(n));
   });
});