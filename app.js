/*
  Async JS: Callback P1

*/

console.log('Before')

// 3. use callback here
getUser(1, (user) => {
  console.log(user)
  // Ex: after having user, we want to get all the repos of that user
})
console.log('After')

// 1. Add param "callback"
// 2. Change return to callback()
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a User from database...')
    callback({ id, githubUser: 'Joe' })
  })
}
