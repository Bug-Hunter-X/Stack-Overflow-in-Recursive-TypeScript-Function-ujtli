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

//Solution:
function printNumbersIterative(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbersIterative(10000); //This will work fine

//Alternative solution (tail call optimization - not guaranteed in JS/TS):
function printNumbersTailRecursive(n: number, acc: number = 1): void {
  if (n <= 0) {
    return;
  }
  console.log(acc);
  printNumbersTailRecursive(n - 1, acc + 1);
}
printNumbersTailRecursive(10000); // Might work, might not, depending on the JS engine