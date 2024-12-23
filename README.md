# TypeScript Stack Overflow Bug

This repository demonstrates a common error in recursive TypeScript functions: stack overflow. The `printNumbers2` function recursively calls itself, leading to excessive stack usage when given a large input value.  This example highlights the importance of handling recursion carefully to avoid exceeding the call stack limit.

## How to Reproduce

1. Clone this repository.
2. Compile and run `bug.ts` (you'll need a TypeScript compiler).
3. Observe the stack overflow error when running `printNumbers2` with a large number (e.g., 10000).