/*
  Async JS: Async/Await P1
  - another way to consume promises

*/

console.log('Before')

// (1) need to be in function, because we have to "async" keyword
async function run() {
  const user = await getUser(1)
  console.log(user)
}
console.log('After')

// (2)
run()

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
      resolve(['commit 1', 'commit 2', 'commit 3', 'commit 4'])
      // reject(new Error('Something went wrong. Cannot get the commits ...'))
    }, 2000)
  })
}
