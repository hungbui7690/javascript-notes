/*
  Intersection Observer P3
  - remove "show" for the first card in html

  (***) as soon as 1px of the element is visible, add 'show' class

  (***) test > scroll fast to see
*/

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver((entries) => {
  // (1)
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting) // toggle based on condition: entry.isIntersecting
  })
})

// (2)
cards.forEach((card) => {
  observer.observe(card)
})
