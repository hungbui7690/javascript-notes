/*
  FormData API P5: Common Methods
*/

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  // (1) get by "name attribute"
  const name = formData.get('name')
  console.log(name)

  const x = formData.get('x')
  console.log(x) // returns null since "x attribute" does not exist

  // (2) add()
  formData.append('age', 26)
  console.log(formData.get('age'))

  // (3) delete()
  formData.delete('age')
  console.log([...formData.keys()])

  // (4) has()
  console.log(formData.has('name'))
  console.log(formData.has('x'))
})
