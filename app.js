/*
  Object.assign() P3: Deep Clone P1: Problem
  - because Object.assign() copies property values.
  - If the source value is a reference to an object, it only copies the reference value.

*/

const obj1 = { a: 0, b: { c: 0 } }
const obj2 = Object.assign({}, obj1)
console.log(obj2) // { a: 0, b: { c: 0 } }

obj1.a = 1
console.log(obj1) // { a: 1, b: { c: 0 } }
console.log(obj2) // { a: 0, b: { c: 0 } }

obj2.a = 2
console.log(obj1) // { a: 1, b: { c: 0 } }
console.log(obj2) // { a: 2, b: { c: 0 } }

obj2.b.c = 3 // (***) modify both
console.log(obj1) // { a: 1, b: { c: 3 } }
console.log(obj2) // { a: 2, b: { c: 3 } }
