/*
  Fetch API P2: Fetch Text File

*/

const getTextBtn = document.getElementById('getText')
const getUsersBtn = document.getElementById('getUsers')
const getPostsBtn = document.getElementById('getPosts')
const addPostBtn = document.getElementById('addPost')

// (1)
function getText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data
    })
    .catch((err) => console.log(err))
}

// (2)
getTextBtn.addEventListener('click', getText)
