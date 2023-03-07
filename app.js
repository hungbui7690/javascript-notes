/*
  Intersection Observer P8: Infinite Scrolling Example P1
  > root option
    - right now, it is the .card-container > and observer tracks all of its children 
      > we can set it to anything we want 

*/

const cardContainer = document.querySelector('.card-container')
const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  },
  { threshold: 1 }
)

cards.forEach((card) => {
  observer.observe(card)
})

// (1)
const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0]

  // (3)
  if (!lastCard.isIntersecting) return

  // (4)
  loadNewCards()
})

// (2)
lastCardObserver.observe(document.querySelector('.card:last-child'))

// (5)
function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div')
    card.textContent = 'New Card'
    card.classList.add('card')
    observer.observe(card)
    cardContainer.append(card)
  }
}
