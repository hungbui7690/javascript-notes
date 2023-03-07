/*
  Axios P13: Cancellation 2
  
  - Setting the timeout property in an axios call handles response related timeouts.

  - In some cases (e.g. network connection becomes unavailable) an axios call would benefit from cancelling the connection early. Without cancellation, the axios call can hang until the parent code/stack times out (might be a few minutes in a server-side applications).

  - To terminate an axios call you can use following methods:
      + signal
      + cancelToken (deprecated)
  
  - Combining timeout and cancellation method (e.g. signal) should cover response related timeouts AND connection related timeouts.

*/

const controller = new AbortController()

function cancellation() {
  axios
    .get('/foo/bar', {
      signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
    })
    .then(function (response) {
      //...
    })
}

document.getElementById('cancel').addEventListener('click', cancellation)
