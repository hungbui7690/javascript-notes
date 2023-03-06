/*
  FormData API P8: Reset Form to Default
  - try to change the value of inputs > then click submit
*/

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  // (1)
  formData.append('test', 1234)

  // (2)
  const formObject = Object.fromEntries(formData)
  console.log(formObject)

  // (3) reset to default
  e.currentTarget.reset()
})
