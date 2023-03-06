/*
  Async JS: Async Patterns

  - with async function, we can not consume it like normal
  - there are 3 ways to consume an async function:
    - callback
    - promise
    - async/await

*/

console.log('Before')

const user = getUser(1)
console.log(user) // (***) undefined

console.log('After')

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a User from database...')
    return { id, githubUser: 'Joe' }
  })
}
