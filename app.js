/*
  Async JS: Settle Promises
  - we don't use new Promise(resolve, reject)
*/

// (***) we use class Promise.resolve()
const p1 = Promise.resolve({ id: 1 })
p1.then((result) => console.log(result))

// (***) when we reject, we should use new Error
const p2 = Promise.reject(new Error('p2: Something went wrong...'))
p2.catch((err) => console.log(err))

// (***) reject WITHOUT new Error > no call stack
const p3 = Promise.reject('p3: Something went wrong...')
p3.catch((err) => console.log(err))
