/*
  Async JS: Replace Callbacks with Promise

  (1) return new Promise()
  (4) we can see that, it does not work here > to consume promise, we need to use .then() & .catch > cannot use callback

*/

console.log('Before')

// (4) we can see that, it does not work here > to consume promise, we need to use .then() & .catch
getUser(1, (user) => {
  getRepositories(user, (repo) => {
    getCommits(repo, (commit) => {
      console.log(commit)
    })
  })
})
console.log('After')

// (1)
function getUser(id) {
  // [a] return Promise + remove callback param
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a User from database...')

      // [b] change to resolve()
      resolve({ id, githubUser: 'Joe' })
    }, 2000)
  })
}

// (2) do similar to getUser
function getRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting Repositories...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
  })
}

// (3) do similar to getUser
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting Commits...')
      resolve(['commit 1', 'commit 2', 'commit 3', 'commit 4'])
    }, 2000)
  })
}
