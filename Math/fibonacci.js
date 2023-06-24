////////////  Using Array ////////

function fibo(n) {
  let F = [0, 1];
  let i = 0;
  for (i = 2; i < n; i++) {
    F[i] = F[i - 1] + F[i - 2];
  }
  console.log(F);
  return F;
}

///// with out using array or recursion //////

function fib(n) {
  x = 0;
  y = 1;
  let temp;
  while (n >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    n--;
  }
  console.log(y);
  return y;
}

fib(10);
fibo(10);
