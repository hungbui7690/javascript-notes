/*
  Debounce P3:
  - with the setup below, we cannot log 'click ✈' 
  - note that the id keeps increasing after each click 
  > reason because the timeout is clear right away, after we click
*/

const btn = document.querySelector('.btn')

const debounce = () => {
  // (1) save to variable
  const timeoutID = setTimeout(() => {
    console.log('clicked ✈')
  }, 2000)

  console.log(timeoutID)

  // (2) clear
  clearTimeout(timeoutID)
  console.log('hello')
}

btn.addEventListener('click', debounce)
