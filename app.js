/*
  Async JS: Callback P2

*/

console.log('Before')

getUser(1, (user) => {
  // 2.
  getRepositories(user, (repo) => {
    console.log(repo)
  })
})
console.log('After')

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a User from database...')
    callback({ id, githubUser: 'Joe' })
  })
}

// 1.
function getRepositories(user, callback) {
  setTimeout(() => {
    console.log('Getting Repositories...')
    callback(['repo1', 'repo2', 'repo3'])
  })
}
