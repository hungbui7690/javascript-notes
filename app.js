/*
  Fetch API P3: Fetch JSON Data

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

// (1)
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

// (2)
getUsersBtn.addEventListener('click', getUsers)
