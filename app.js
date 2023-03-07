/*
  Axios P15: Default Configs

*/

const AUTH_TOKEN = 'x9x9x9x9'

// (***) 3 lines below will be the defaults config when we send to server
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

function addTodo() {
  // because we setup baseURL above > we don't need to put full url
  axios
    .post('/todos', {
      title: 'New Todo',
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('post').addEventListener('click', addTodo)
