
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'


// Reveal On Scroll Functionality
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 85)


// Mobile Menu - creating a new object that uses MobileMenu class as a blueprint
// we can create a new object simply like this: new MobileMenu(); but we want to store this object as a variable so as below.
let mobileMenu = new MobileMenu()



// Refreshing on the fly
if (module.hot) {
  module.hot.accept()
}
