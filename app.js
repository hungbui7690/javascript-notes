/*
  Object.assign() P3: Deep Clone P2: Solution
  - For deep cloning, we need to use alternatives, because Object.assign() copies property values.

*/

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } }
const obj4 = JSON.parse(JSON.stringify(obj3)) // (***) parse to String

obj3.a = 4
obj3.b.c = 4
console.log(obj4) // { a: 0, b: { c: 0 } }
