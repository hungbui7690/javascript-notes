/*
  Async JS: Parallel Promise P3
  - Promise.race()
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

// (***) sometimes, we want to do something right after one promise is completed > Promise.race()
Promise.race([p1, p2])
  .then((results) => console.log(results))
  .catch((err) => console.log(err))
