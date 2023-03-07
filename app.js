/*
  Axios P4: POST Method
  - success: 201

*/

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
