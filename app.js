/*
  Axios P2: GET Method
  
*/

// GET REQUEST
function getTodos() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    params: {
      _limit: 5, // param
    },
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('get').addEventListener('click', getTodos)
