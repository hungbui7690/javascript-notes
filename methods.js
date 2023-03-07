// GET REQUEST
function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}
document.getElementById('get').addEventListener('click', getTodos)

// POST REQUEST
function addTodo() {
  // because we setup baseURL above > we don't need to put full url
  axios
    .post('/todos', {
      title: 'New Todo',
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}

document.getElementById('post').addEventListener('click', addTodo)

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

// DELETE REQUEST: must have id > no need body
function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => showOutput(res))
    .catch((err) => console.error(err))
}
document.getElementById('delete').addEventListener('click', removeTodo)

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
    ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch((err) => console.error(err))
}
document.getElementById('sim').addEventListener('click', getData)

// CUSTOM HEADERS
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

// ERROR HANDLING
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

// CANCELLATION
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

// INTERCEPTIONS
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
