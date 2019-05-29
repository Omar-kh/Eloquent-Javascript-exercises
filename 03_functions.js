// Solutions will be self rated on a scale ranging from 1 to 5 based on a comparison to the author's solution
// MINIMUM
// Rating: 5/5
function minimum(a, b) {
  return a < b ? a : b;
}

minimum(100, 150);

// RECURSION
// Rating: 4/5 Stopped the function instead of recursing with the opposite of a negative number but the global approach is similar
function isEven(num) {
  if (num < 0) {
    return 'Please provide a positive number';
  }
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
}

// BEAN COUNTING
// Rating: ?/5 didn't apply the same logic
function countChars(char) {
  return function(str) {
    let num = 0;
    for (i = 0; i < str.length; i++) {
      if (str[i] === char) {
        num += 1;
      }
    }
    return num;
  };
}
const countBs = countChars('B');
