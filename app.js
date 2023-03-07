/*
  Intersection Observer P4
  - add threshold option
*/

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting) // toggle based on condition: entry.isIntersecting
    })
  },
  { threshold: 0.8 }
) // options > right now: if 80% of the element appears on the screen > add 'show'

cards.forEach((card) => {
  observer.observe(card)
})
