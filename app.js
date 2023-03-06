/*
  Async JS: Parallel Promise P1
  - Promise.all([x1, x2])
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Operation 1...')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Operation 2...')
    resolve(2)
  }, 2000)
})

// (***) results is the combination of p1 & p2 > array
Promise.all([p1, p2]).then((results) => console.log(results))
