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
     
            section.classList.add("your-active-class");
            var listId = "list-"+id;
            var list = document.getElementById(listId);
            
            list.classList.add("listActive");
        }
        else
        {
            var sectionId = "section"+i;
            var section = document.getElementById(sectionId);

            section.classList.remove("your-active-class");
            var listId = "list-"+i;
            var list = document.getElementById(listId);
   
            list.classList.remove("listActive");
            list.classList.add("listNotActive");
        }
    }
  
}
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //var sectionId = "section"+id;
   // var section = document.getElementById(sectionId);
     
   //section.classList.add("your-active-class");
   //var listId = "list-"+id;
   //var list = document.getElementById(listId);
            
  //list.classList.add("listActive");

     //>=, not <=
    if (scroll >= 300) {
        //clearHeader, not clearheader - caps H
        $("#section1").addClass("your-active-class");
        $("#section2").removeClass("your-active-class");
        $("#section3").removeClass("your-active-class");
        $("#list-1").addClass("listActive");
        $("#list-2").removeClass("listActive");
        $("#list-3").removeClass("listActive");
        $("#list-2").addClass("listNotActive");
        $("#list-3").addClass("listNotActive");
    }
    if (scroll >= 600) {
        //clearHeader, not clearheader - caps H
        $("#section2").addClass("your-active-class");
        $("#section1").removeClass("your-active-class");
        $("#section3").removeClass("your-active-class");
        $("#list-2").addClass("listActive");
        $("#list-1").removeClass("listActive");
        $("#list-3").removeClass("listActive");
        $("#list-1").addClass("listNotActive");
        $("#list-3").addClass("listNotActive");
    }
    if (scroll >= 1200) {
        //clearHeader, not clearheader - caps H
        $("#section3").addClass("your-active-class");
        $("#section1").removeClass("your-active-class");
        $("#section2").removeClass("your-active-class");
        $("#list-3").addClass("listActive");
        $("#list-2").removeClass("listActive");
        $("#list-1").removeClass("listActive");
        $("#list-2").addClass("listNotActive");
        $("#list-1").addClass("listNotActive");
    }
});