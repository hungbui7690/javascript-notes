/*
  Axios P3: GET Method
  
*/

// (***) we add the param directly to URL
function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('get').addEventListener('click', getTodos)
