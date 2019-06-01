// Solutions will be self rated on a scale ranging from 1 to 5 based on a comparison to the author's solution
// THE SUM OF A RANGE
// Rating 5/5
function range(start, end, step) {
  if ((end - start) * step < 0) {
    throw new Error('Cannot process your numbers');
  }

  let arr = [];
  let limSup = (end - start) / step;
  for (i = 0; i <= limSup; i += 1) {
    arr.push(start + i * step);
  }
  return arr;
}

function sum(arr) {
  let total = 0;
  for (i of arr) {
    total += i;
  }
  return total;
}

// REVERSING AN ARRAY
// Rating 5/5 The exact same method has been used
function reverseArray(arr) {
  let newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//REVERSING AN ARRAY IN PLACE
//Rating 3/5 don't know if usage of the splice method was allowed
function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(arr.length - (1 + i), 0, arr.shift());
  }
  return arr;
}
