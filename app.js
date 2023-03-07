/*
  Axios P11: Error Handling 2
  
  - Using the validateStatus config option, you can define HTTP code(s) that should throw an error.
    > in the example below: status code = 404 (wrong URL) > reject === throw error


  (***) Test Cases: 
    > wrong url: log error
    > correct url: show result
*/

function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
      validateStatus: function (status) {
        return status >= 200 && status < 300 // Resolve only if the status code from 200 to 299
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)

        if (err.response.status === 404) {
          alert('Error: Page Not Found')
        }
      } else if (err.request) {
        console.error('> err.request', err.request)
      } else {
        console.error('> err.message', err.message)
      }
    })
}

document.getElementById('error').addEventListener('click', errorHandling)
