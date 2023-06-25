//////////////////////////////////////////// factorial without an array (while loop) ///////////////////////////////////////

// function fact(n) {
//   let result = n;
//   if (n === 0 || n === 1) {
//     result = 1;
//   } else {
//     while (n > 1) {
//       n--;
//       result = result * n;
//     }
//   }

//   console.log(result);
//   return result;
// }
// fact(15);
// fact(5);
// fact(0);
// fact(1);

//////////////////////////////////////////// factorial with (for loop) ///////////////////////////////////////

function facto(n) {
  if (n === 0 || n === 1) {
    n = 1;
    console.log(n);
    return n;
  } else {
    for (var i = n - 1; i > 1; i--) {
      n = n * i;
    }
    console.log(n);
    return n;
  }
}
facto(15);
facto(5);
facto(0);
facto(1);
