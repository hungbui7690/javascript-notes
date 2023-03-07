/*
  Axios P5: DELETE Method

*/

// DELETE REQUEST: must have id > no need body
function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('delete').addEventListener('click', removeTodo)
