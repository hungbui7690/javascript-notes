/*
  Async JS: Parallel Promise P2
  - in case either one fails

  (***) Parallel Promise: both run at "almost" the same time > because of single thread
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Operation 1...')
    reject(new Error('Error in Promise 1...'))
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Operation 2...')
    resolve(2)
  }, 2000)
})

// either one failed > consider rejected
Promise.all([p1, p2])
  .then((results) => console.log(results))
  .catch((err) => console.log(err))
