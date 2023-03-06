/*
  FormData API P5: Iteration
*/

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  // (***)
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`)
  }
})
