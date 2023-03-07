// GET Method
function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}
document.getElementById('get').addEventListener('click', getTodos)

// POST REQUEST
function addTodo() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}
document.getElementById('post').addEventListener('click', addTodo)

// PUT/PATCH REQUEST: must have id + body
function updateTodo() {
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo', // body
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}
document.getElementById('update').addEventListener('click', updateTodo)
