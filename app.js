/*
  Axios P5: PUT/PATCH Method
  - success: 201

*/

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
