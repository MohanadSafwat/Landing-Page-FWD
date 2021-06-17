/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


function setActive(id){
    for(var  i = 1 ; i <= 3 ; i++ )
    {
        if(i == id)
        {
            var sectionId = "section"+id;
            var section = document.getElementById(sectionId);
            console.log(section);
            section.classList.add("your-active-class");
            var listId = "list-"+id;
            var list = document.getElementById(listId);
            console.log(list);
            list.classList.add("listActive");
        }
        else
        {
            var sectionId = "section"+i;
            var section = document.getElementById(sectionId);
            console.log(section);
            section.classList.remove("your-active-class");
            var listId = "list-"+i;
            var list = document.getElementById(listId);
            console.log(list);
            list.classList.remove("listActive");
            list.classList.add("listNotActive");
        }
    }
  
}