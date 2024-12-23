function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  if (n <= 0) {
    return;
  }
  printNumbers2(n - 1);
  console.log(n);
}

printNumbers2(5); // Stack overflow error for large n