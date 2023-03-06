/*
  Async JS: Callback Hell

*/

console.log('Before')

// (***) Callback Hell
getUser(1, (user) => {
  getRepositories(user, (repo) => {
    getCommits(repo, (commit) => {
      console.log(commit)
    })
  })
})
console.log('After')

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a User from database...')
    callback({ id, githubUser: 'Joe' })
  }, 2000)
}

function getRepositories(user, callback) {
  setTimeout(() => {
    console.log('Getting Repositories...')
    callback(['repo1', 'repo2', 'repo3'])
  }, 2000)
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Getting Commits...')
    callback(['commit 1', 'commit 2', 'commit 3', 'commit 4'])
  }, 2000)
}
