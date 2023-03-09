/*
  Object.assign() P1
  - use to copy object
  - Object.assign(target, source)
  - use in pre ES6
  - after ES6, we can use spread operator

*/

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)

console.log(returnedTarget) // {a: 1, b: 4, c: 5}
console.log(target) // {a: 1, b: 4, c: 5}

console.log(returnedTarget === target) // true
