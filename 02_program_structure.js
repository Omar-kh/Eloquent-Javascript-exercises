// Solutions will be self rated on a scale ranging from 1 to 5 based on a comparison to the author's solution
// LOOPING A TRIANGLE
// Rating: 2/5
let hashStr = '';
for (i = 0; i < 7; i++) {
  hashStr += '#';
  console.log(hashStr);
}

// FIZZBUZZ
// Rating: 1/5
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else {
      console.log('FIZZ');
    }
  } else {
    if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
}

// CHESSBOARD
// Rating: 4.5/5
let size = 8;

for (i = 1; i <= size; i++) {
  let line = '';
  for (j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}
