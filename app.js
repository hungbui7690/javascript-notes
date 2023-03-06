/*
  Async JS: Promise
  - new Promise((resolve, reject) => {})
    + resolve()
    + reject()

  - Consume Promise: 
    + .then()
    + .catch()

*/

// (1) create promise (async function)
const p = new Promise((resolve, reject) => {
  let err = false

  // kick out some async work ...
  setTimeout(() => {
    if (!err) {
      resolve({ user: 'Joe Doe' }) // pending => resolved/fulfilled
    } else reject(new Error('Error Message')) // pending => rejected
  }, 2000)
})

// (2) consume promise
p.then((result) => console.log(result)).catch((err) => console.log(err))
