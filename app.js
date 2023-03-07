/*
  Axios P16: Axios Instance

*/

// AXIOS INSTANCE
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

// when using baseURL > we don't need to use full URL when make request
axiosInstance.get('/comments').then((res) => showOutput(res))
