/*
  Async JS: Consume Promise

*/

console.log('Before')

// (***) need to have return keyword when using code block { } > return values will be passed to next .then() > otherwise, error
getUser(1)
  .then((user) => getRepositories(user.githubUser))
  .then((repo) => {
    console.log(repo)
    return getCommits(repo)
  })
  .then((commit) => console.log(commit))
  .catch((err) => console.log(err))

console.log('After')

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a User from database...')
      resolve({ id, githubUser: 'Joe' })
    }, 2000)
  })
}

function getRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting Repositories...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting Commits...')
      // resolve(['commit 1', 'commit 2', 'commit 3', 'commit 4'])
      reject(new Error('Something went wrong. Cannot get the commits ...'))
    }, 2000)
  })
}
