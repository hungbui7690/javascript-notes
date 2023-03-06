/*
  Async JS: Async/Await P2
  - use try/catch when using Async/Await

*/

console.log('Before')

// (***) use try/catch to catch error
async function run() {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user)
    const commits = await getCommits(repos)
    console.log(commits)
  } catch (error) {
    console.log(error)
  }
}
console.log('After')

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
      // resolve(['commit 1', 'commit 2', 'commit 3', 'commit 4'])
      reject(new Error('Something went wrong. Cannot get the commits ...'))
    }, 2000)
  })
}
