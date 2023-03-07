/*
  Axios P7: Simultaneous Data
  - axios.all()

*/

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
