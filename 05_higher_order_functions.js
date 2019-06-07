// FLATTENING
// Rating 5/5
let arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce((elem1, elem2) => {
  return elem1.concat(elem2);
});

// YOUR OWN LOOP
// Rating 5/5
function loop(val, test, update, body) {
  for (let i = val; test(i); i = update(i)) {
    body(i);
  }
}
// Or
function loop(val, test, update, body) {
  while (test(val)) {
    body(val);
    val = update(val);
  }
}

//EVERYTHING
// Rating 3/5
function every(arr, test) {
  for (elem of arr) {
    if (!test(elem)) return false;
  }
  return true;
}

function every(arr, test) {
  if (arr.length === 0) return true;
  if (!arr.some(test)) return false;

  if (arr.some(test)) {
    matchIdx = arr.findIndex(test);
    arr.splice(matchIdx, matchIdx + 1);
    return every(arr, test);
  }
}
