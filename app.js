/*
  Debounce P2:
  - technique to improve performance of certain functions that are repeatedly called
  - setup threshold time for a function > determines how long to wait before that exec that function again
    > example: user types in the search box > we can use debounce to wait until user pauses typing b4 executing the search function > prevent unnecessary calling the function multiple times, while user is still typing


  - logic: we want to run the callback fn only 2s after the last click 
*/

const btn = document.querySelector('.btn')

// (1) use setTimeout()
const debounce = () => {
  setTimeout(() => {
    console.log('clicked')
  }, 2000)
}

// (2) pass ref > now, it's not correct, since it shows multiple console log after 2s > we just want to have 1 log
btn.addEventListener('click', debounce)
