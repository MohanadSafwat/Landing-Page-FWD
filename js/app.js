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
    var element = document.getElementById("navbar__list");
    console.log(element);
    element.style.display = "none";

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
    setTimeout(()=>{
        element.style.display = "block";
    }, 500);
  
}

window.addEventListener('scroll', function() {
	var section1 = document.querySelector('#section1');
	var position1 = section1.getBoundingClientRect();
    var list1 = document.getElementById("list-1");

    var section2 = document.querySelector('#section2');
	var position2 = section2.getBoundingClientRect();
    var list2 = document.getElementById("list-2");

    var section3 = document.querySelector('#section3');
	var position3 = section3.getBoundingClientRect();
    var list3 = document.getElementById("list-3");

     

	if(position1.top >= 0 && position1.bottom <= window.innerHeight) {
        section1.classList.add("your-active-class");
        list1.classList.add("listActive");

        section2.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list2.classList.remove("listActive");
        list3.classList.remove("listActive");
        list2.classList.add("listNotActive");
        list3.classList.add("listNotActive");
	}


	if(position1.top < window.innerHeight -200 && position1.bottom >= 0) {
		section1.classList.add("your-active-class");
        list1.classList.add("listActive");

        section2.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list2.classList.remove("listActive");
        list3.classList.remove("listActive");
        list2.classList.add("listNotActive");
        list3.classList.add("listNotActive");
	}

    if(position2.top >= 0 && position2.bottom <= window.innerHeight) {
        section2.classList.add("your-active-class");
        list2.classList.add("listActive");

        section1.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list1.classList.remove("listActive");
        list3.classList.remove("listActive");
        list1.classList.add("listNotActive");
        list3.classList.add("listNotActive");
	}


	if(position2.top < window.innerHeight -200 && position2.bottom >= 0) {
		section2.classList.add("your-active-class");
        list2.classList.add("listActive");

        section1.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list1.classList.remove("listActive");
        list3.classList.remove("listActive");
        list1.classList.add("listNotActive");
        list3.classList.add("listNotActive");
	}


if(position3.top >= 0 && position3.bottom <= window.innerHeight) {
    section3.classList.add("your-active-class");
    list3.classList.add("listActive");

    section2.classList.remove("your-active-class");
    section1.classList.remove("your-active-class");
    list2.classList.remove("listActive");
    list1.classList.remove("listActive");
    list2.classList.add("listNotActive");
    list1.classList.add("listNotActive");
}


if(position3.top < window.innerHeight -200&& position3.bottom >= 0) {
    section3.classList.add("your-active-class");
    list3.classList.add("listActive");

    section2.classList.remove("your-active-class");
    section1.classList.remove("your-active-class");
    list2.classList.remove("listActive");
    list1.classList.remove("listActive");
    list2.classList.add("listNotActive");
    list1.classList.add("listNotActive");
}

});
