/*
  Fetch API P5: POST Method

*/

const getTextBtn = document.getElementById('getText')
const getUsersBtn = document.getElementById('getUsers')
const getPostsBtn = document.getElementById('getPosts')
const addPostBtn = document.getElementById('addPost')

function getText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data
    })
    .catch((err) => console.log(err))
}
getTextBtn.addEventListener('click', getText)

function getUsers() {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Users</h2>'
      data.forEach(function (user) {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
      `
      })
      document.getElementById('output').innerHTML = output
    })
}
getUsersBtn.addEventListener('click', getUsers)

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Posts</h2>'
      data.forEach(function (post) {
        output += `
        <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
      })
      document.getElementById('output').innerHTML = output
    })
}
getPostsBtn.addEventListener('click', getPosts)

// (1) After Add > click on "Get JSON" button
function addPost(e) {
  e.preventDefault()

  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  // (***) need to have method + headers options + body > body must be string: JSON.stringify()
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

// (2)
addPostBtn.addEventListener('submit', addPost)
