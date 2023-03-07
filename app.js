/*
  Intersection Observer P2
  - entries: all the things that have been intersected or un-intersected  

  
  - some properties:
    + intersectionRatio: 1 > that element is showed full on the screen
    + isIntersecting: is is visible to user
    + boundingClientRect: actual shape of the element
    + intersectionRect: how much that element is on the screen > first card is 100% on the screen > intersectionRect === boundingClientRect
    + rootBounds: screen
    + target: that element


*/

// (1) select all the cards
const cards = document.querySelectorAll('.card')

// (2) create observer
const observer = new IntersectionObserver((entries) => {
  console.log(entries)
})

// (3) (***) must be element type > cards === NodeList > cards[0] === Element
observer.observe(cards[0]) // intersectionRatio: 1
observer.observe(cards[1]) // intersectionRatio: 1 > though invisible, but still on the screen
