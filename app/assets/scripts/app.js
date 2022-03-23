
import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import HighlightedLinks from './modules/HighlightedLinks'


//HighlightedLinks
new HighlightedLinks()

//Sticky Header
new StickyHeader()

// Reveal On Scroll Functionality
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 85)


// Mobile Menu - creating a new object that uses MobileMenu class as a blueprint
// we can create a new object simply like this: new MobileMenu(); but we want to store this object as a variable so as below.
new MobileMenu()


// LOAD MODAL JS only when the button is clicked
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})


// Refreshing on the fly
if (module.hot) {
  module.hot.accept()
}
