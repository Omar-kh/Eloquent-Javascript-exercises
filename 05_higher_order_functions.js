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
