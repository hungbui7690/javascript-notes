/*
  Dynamic Object Keys P3: Variables

*/

// (1)
let appState = 'loading'
appState = 'error'

// (2)
const app = {
  [appState]: true,
}
console.log(app) // {error: true}

// (3)
const keyName = 'computer'
app[keyName] = 'apple'
console.log(app) // {error: true, computer: 'apple'}
