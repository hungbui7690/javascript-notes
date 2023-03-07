/*
  Axios P17: Alter Axios Instance

*/

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
})

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common['Authorization'] = '12345x'
axiosInstance.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos'

// when using baseURL > we don't need to use full URL when make request
axiosInstance.get('/').then((res) => showOutput(res))
