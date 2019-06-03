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

// A LIST
// ARRAY TO LIST
// Rating 3/5
function arrayToList(arr) {
  let list = {
    value: arr[0],
    rest: {}
  };
  let list_nest = list['rest'];
  for (let i = 1; i < arr.length; i++) {
    list_nest['value'] = arr[i];
    list_nest['rest'] = {};
    list_nest = list_nest['rest'];
  }

  return list;
}

// LIST TO ARRAY
// Rating 4/5
function listToArray(list) {
  let values = [];
  while (Object.values(list).length > 0) {
    values.push(list.value);
    list = list.rest;
  }
  return values;
}

// PREPEND
// Rating 5/5
function prepend(elem, list) {
  return { value: elem, rest: list };
}

// NTH
// Rating 5/5
function nth(list, num) {
  if (num > 0 && list !== undefined) {
    num -= 1;
    list = list.rest || undefined;
    return nth(list, num);
  } else if (!list) {
    return 'You specified an index higher than the number of the nested objects';
  } else {
    return list.value;
  }
}

// DEEP COMPARISON
// Rating 0/5 was too tired to focus on a solution (the following does not work)

function deepEqual(firstObj, secondObj) {
  Object.keys(firstObj).forEach(key => {
    if (firstObj[key] && secondObj[key]) {
      if (
        firstObj[key] &&
        typeof firstObj[key] === typeof secondObj[key] &&
        typeof firstObj[key] === 'object'
      ) {
        return deepEqual(firstObj[key], secondObj[key]);
      } else {
        return firstObj[key] === secondObj[key];
      }
    } else {
      return 'The objects have different keys';
    }
  });
}
