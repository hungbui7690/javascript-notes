/*
  FormData API P7: Convert FormData to Object
*/

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  // (***)
  formData.append('test', 1234)

  // (***) convert to object > we can use this to send data to server using Axios or fetch()
  const formObject = Object.fromEntries(formData)
  console.log(formObject)
})
