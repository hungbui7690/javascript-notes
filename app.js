/*
  Axios P9: Transforming Request & Response

*/

function transformResponse() {
  const options = {
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/todos',

    // (1)
    data: {
      title: 'Hello World',
    },

    // (2) transform data to uppercase b4 sending it to server
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase()
      return data
    }),
  }

  // (***)
  axios(options).then((res) => showOutput(res))
}

document
  .getElementById('transform')
  .addEventListener('click', transformResponse)
