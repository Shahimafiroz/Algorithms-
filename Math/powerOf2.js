// A simple method for this is to simply take the log of the number on base 2 and if you get an integer then the number is the power of 2 but this method wont surfice for the number 536870912 and above as Math.log function runs out of capacity

// function isPowerOf2(n) {
//   let a = Math.log(n);
//   let b = Math.log(2);

//   if (Number.isInteger(a / b)) {
//     console.log("Yes it is not raised the power of 2.");
//     return "yes";
//   } else {
//     console.log("No , it is not raised to the power of 2");
//     return "no";
//   }
// }

// isPowerOf2(4);
// isPowerOf2(6);
// isPowerOf2(536870912);

//// Iterative approach: Instead of using logarithms, consider an iterative approach where you repeatedly divide the number by 2 until it becomes 1 or an odd number. If it becomes an odd number before reaching 1, then it is not a power of two. Therefore, the overall time complexity of the function is O(log₂(n)). ////

// function isPowerOfTwo(n) {
//   let x = 0;
//   while (2 ** x < n) {
//     x++;
//   }
//   return 2 ** x === n;
// }

// Consider the binary representation: Numbers that are powers of two have a distinct pattern in their binary representation. Try to observe this pattern and see if you can identify any unique properties that can help you detect powers of two.
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

isPowerOfTwo(64);
