/*
  Debounce P6
  - another way to write this 

*/

const btn = document.querySelector('.btn')

// (2) fn
const debounce = (fn) => {
  let timeoutID

  return () => {
    console.log(timeoutID)
    clearTimeout(timeoutID)

    timeoutID = setTimeout(() => {
      fn() // (3) calling fn
    }, 2000)
  }
}

btn.addEventListener(
  'click',

  // (1)
  debounce(() => {
    console.log('clicked ✈')
  })
)
