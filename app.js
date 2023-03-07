/*
  Axios P14: Intercepting Requests & Responses
  - You can intercept requests or responses before they are handled by then or catch.

*/

function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

// (***) intercept request
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    )

    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// (***) intercept response
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    response.data[0].userId = 999 // modify response data
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

document.getElementById('get').addEventListener('click', getTodos)
