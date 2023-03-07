/*
  Debounce P5
  - now it works

*/

const btn = document.querySelector('.btn')

const debounce = () => {
  // (1)
  let timeoutID

  return () => {
    console.log(timeoutID)
    clearTimeout(timeoutID) // (2) this needs to be before setTimeout > clear out the last one

    // (3)
    timeoutID = setTimeout(() => {
      console.log('clicked ✈')
    }, 2000)
  }
}

btn.addEventListener('click', debounce())
