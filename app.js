/*
  Axios P10: Error Handling 1
  - url not correct


  (***) 3 cases: 
    > Case 1: status code different than 200 range
    > Case 2: request was made but no response from server
    > Case 3: no request + no response

*/

function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {})
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)

        if (err.response.status === 404) {
          alert('Error: Page Not Found')
        }
      } else if (err.request) {
        // Request was made but no response
        console.error('> err.request', err.request)
      } else {
        // Error
        console.error('> err.message', err.message)
      }
    })
}

document.getElementById('error').addEventListener('click', errorHandling)
