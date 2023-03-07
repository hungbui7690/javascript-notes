/*
  Debounce P4:
  - at (1), we invoke the function right away 
  - but we don't want to invoke > (2) === return a function 

*/

const btn = document.querySelector('.btn')

// (2)
const debounce = () => {
  return () => {
    const timeoutID = setTimeout(() => {
      console.log('clicked ✈')
    }, 2000)

    console.log(timeoutID)
    clearTimeout(timeoutID)
  }
}

// (1)
btn.addEventListener('click', debounce())
