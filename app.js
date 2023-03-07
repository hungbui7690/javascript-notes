/*
  Intersection Observer P8: Infinite Scrolling Example P2

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

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return

    loadNewCards()

    // (***) after loading new cards > last card is not the last card anymore > we need to reset
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
  },
  { rootMargin: '100px' } // (***) in case the network is slow when we fetching and load new data > this is to prevent
)

lastCardObserver.observe(document.querySelector('.card:last-child'))

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div')
    card.textContent = 'New Card'
    card.classList.add('card')
    observer.observe(card)
    cardContainer.append(card)
  }
}
