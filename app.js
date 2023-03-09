/*
  Object.assign() P2
  - clone object

*/

const obj = { a: 1 }

const copy = Object.assign({}, obj)
console.log(copy) // { a: 1 }
