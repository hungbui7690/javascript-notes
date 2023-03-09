/*
  Object.assign() P4: Merging objects with same properties

*/

const o1 = { a: 1, b: 1, c: 1 }
const o2 = { b: 2, c: 2 }
const o3 = { c: 3 }

const obj = Object.assign({}, o1, o2, o3) // (***) use {}
console.log(obj) // { a: 1, b: 2, c: 3 }
console.log(o1) // {a: 1, b: 1, c: 1}
