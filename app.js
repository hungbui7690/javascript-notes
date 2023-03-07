/*
  Axios P8: Custom Headers
  - axios.post(url, body, options)
*/

// (***)
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'sometoken', // add this config to headers when
  },
}

function customHeaders() {
  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Todo',
        completed: false,
      },
      config // (***) use config here
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('headers').addEventListener('click', customHeaders)
