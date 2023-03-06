/*
  Async JS: Named Function P3

*/

console.log('Before')

// 3.
getUser(1, getAllRepos)
console.log('After')

// 2.
function getAllRepos(user) {
  getRepositories(user, getAllCommits)
}

// 1. don't use arrow function > hoisting
function getAllCommits(repo) {
  getCommits(repo, displayCommit)
}

function displayCommit(commit) {
  console.log(commit)
}

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
