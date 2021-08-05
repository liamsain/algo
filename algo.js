module.exports = {
  bubbleSort: function(arr){
    let swapNeeded = true;
    while(swapNeeded) {
      swapNeeded = false;
      for(let i = 0; i < arr.length; i += 1) {
        if ((i + 1) > arr.length) {
          return;
        }
        if (arr[i] > arr[i + 1]) {
          const toMoveBack = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = toMoveBack;
          swapNeeded = true;
        }
      }
    }
  },

  arrIsInOrder: function(arr) {
    let isInOrder = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (i === 0) {
        continue;
      }
      if (arr[i] < arr[i - 1]) {
        isInOrder = false;
        break;
      }
    }
    return isInOrder;
  },

  genArr(size) {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    return new Array(size).fill(0).map(() => rnd(0, size));
  },

  binSearch(orderedArr, targetVal) {
    let targetIndexFound = false;
    let centerIndex;
    while (true) {
      centerIndex = Math.floor(orderedArr.length / 2);
      let centerVal = orderedArr[centerIndex];
      if (centerVal === targetVal) {
        break;
      } else if (centerVal > targetVal) {
        centerIndex = Math.floor(centerIndex / 2);
      } else {
        centerIndex += Math.floor(centerIndex / 2);
      }
    }
    return centerIndex;
  },

  containsDuplicates(arr) {
    const entries = {};
    let containsDuplicates = false;
    for (let i of arr) {
      if (entries[i]) {
        containsDuplicates = true;
        break;
      } else {
        entries[i] = true;
      }
    }
    return containsDuplicates;
  },

  selectionSort(arr) {

  },

  partitionArr(arr) {
    if (arr.length < 1) {
      return arr;
    }

    const pivotIndex = arr.length - 1;
    const pivotVal = arr[pivotIndex];

    let leftPointerIndex = 0;
    let rightPointerIndex = pivotIndex - 1;
    let partitioned = false;
    while (!partitioned) {
      while(true) {
        if (arr[leftPointerIndex] >= pivotVal) {
          break;
        }
        leftPointerIndex += 1;
      }

      while(true) {
        if (arr[rightPointerIndex] <= pivotVal) {
          break;
        }
        rightPointerIndex -= 1;
      }
      let temp = arr[leftPointerIndex];
      arr[leftPointerIndex] = arr[rightPointerIndex];
      arr[rightPointerIndex] = temp;
    }
  }
}


