class MobileMenu {   //creating a class MobileMenu

    // 1. Selecting elements from the DOM
    constructor() {  //creating constructor function which will run immediatelly when the new object is created with the MobileMenu class (created at app.js file)
        this.menuIcon = document.querySelector(".site-header__menu-icon")  //Property that stores DOM selection for our menu icon element
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.events() //here we have to call the events method otherwise the browse is not going to be look out for our 'events()' method below. We could name it whatever we want so to actually let the browser to call our events method we need to call it withing cunstructor.
    }

    // 2. Events handling method
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu()) //The element we want to listen for.
    }   // When function addEventListener runs is going to modify 'this' keyword to points toward the DOM element which was just clicked on. To get around this we need to use a 'arrow function'. Arrow function is not manipulating the value of the 'this' keyword. So now we are not allow addEventListener to execute this function we actually passing this to the arrow function and the arrow function will execute our toggleMenu method.

    // 3. Defining Functionality - methods (function, action...)
    toggleTheMenu() {  //When the event is clicked we respond with out toggleTheMenu method
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")   //Adding a modifier to our site-header__menu-icon class
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")  //this class make our menu visible. It will add and remove the class from our menu when the icon is clicked.
        this.siteHeader.classList.toggle("site-header--is-expanded")  //we can apply styles when menu is expanded so for example add a shade/overlay background

    }
}

export default MobileMenu;   //Exporting to be able to import this file inside our app.js file
