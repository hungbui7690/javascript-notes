/*
  Intersection Observer P5: unobserve()

*/

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)

      // (***) if the entry is shown > don't observer again > remove from observer
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  { threshold: 0.8 }
)

cards.forEach((card) => {
  observer.observe(card)
})
