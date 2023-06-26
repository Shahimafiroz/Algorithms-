// A simple method for this is to simply take the log of the number on base 2 and if you get an integer then the number is the power of 2

function isPowerOf2(n) {
  let a = Math.log(n);
  let b = Math.log(2);

  if (Number.isInteger(a / b)) {
    console.log("Yes it is not raised the power of 2.");
    return "yes";
  } else {
    console.log("No , it is not raised to the power of 2");
    return "no";
  }
}

isPowerOf2(4);
isPowerOf2(6);
isPowerOf2(536870912);
