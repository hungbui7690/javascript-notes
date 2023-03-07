/*
  Intersection Observer P6: rootMargin
  > rootMargin: '-100px'


  (***) rootMargin: '100px': 100px away > out of sight > we need to use inspector to check
*/

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  },
  { rootMargin: '100px' } // (***) we say that the container now is 100px smaller than normal container
)

cards.forEach((card) => {
  observer.observe(card)
})
