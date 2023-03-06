/*
  Dynamic Object Keys P4: modify object
*/

const state = {
  loading: true,
  name: '',
  job: '',
}

// (***)
function modifyState(key, value) {
  state[key] = value
}

// (1) update
modifyState('name', 'Joe')
console.log(state) // {loading: true, name: 'Joe', job: ''}

// (2) create property
modifyState('products', ['computer', 'laptop'])
console.log(state) // {loading: true, name: 'Joe', job: '', products: Array(2)}
