const assert = require('assert');
const algo = require('./algo.js');

function test(fnName, testStr, tests, isFunctional = true) {
  describe(fnName, function() {
    it(testStr, function() {
      tests.forEach(test => {
        if (isFunctional) {
          assert.deepEqual(algo[fnName](test.input), test.expected);
        } else {
          algo[fnName](test.input);
          assert.deepEqual(test.input, test.expected);
        }
      });
    });
  });
}
describe('algo', function() {
  test('bubbleSort', 'sorts an array', [{
    input: [1000, 1,345, 104,3,3,3],
    expected: [1,3,3,3,104,345,1000]
  }], false);

  test(
    'arrIsInOrder',
    'tells you whether an array is in order',
    [
        {
          input: [1,2,3,4,10,20,44],
          expected: true
        },
        {
          input: [4,5,6,7,1,-10],
          expected: false
        }
     ]
  );

  describe('genArr', function() {
    it('generates array of correct size', function() {
      const len = 1000;
      const arr = algo.genArr(len);
      assert.equal(arr.length, len);
    });
  });

  /*
  describe('binSearch', function() {
    it('returns index of target val in given array', function() {
      let orderedArr = [1,2,3,4,5,6,7,8,9,10];
      let targetIndex = 5;
      let targetVal = orderedArr[targetIndex];
      const tests = [
        {
          arr: [1,2,3,4,5,6,7,8,9,10],
          targetVal: 6,
          expected: 5
        },
        {
          arr: [1,2,3,4,5,6,7,8,9,10],
          targetVal: 2,
          expected: 1
        }
      ];
      tests.forEach(test => {
        const result = algo.binSearch(test.arr, test.targetVal);
        assert.equal(result, test.expected);
      });
    });
  });
  */
  test(
    'containsDuplicates',
    'returns whether an array contains duplicates',
    [
        {
          input: [1,2,3,4,5],
          expected: false
        },
        {
          input: [1,2,3,4,5,5],
          expected: true
        }
      ]
  );

  test(
    'partitionArr',
    'partitions an array',
    [
      {
        input: [0,5,2,1,6,3],
        expected: [0,1,2,3,6,5]
      }
   ],
    false
  );

});


