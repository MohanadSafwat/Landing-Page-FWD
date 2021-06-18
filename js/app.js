//setActive() deah function 3shan lmma ados 3la ay button fe el nav bar t set el section we el button dah we yb2a active
function setActive(id){
    // ba5fy el nav bar mo2qtan lmma bados 3la ay button we brg3 azhroh tany b3d 0.5 second
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
        }
    }
    setTimeout(()=>{
        element.style.display = "block";
    }, 500);
  
}
// dah 3shan lmma ba scroll el active section we el active button yt8yroh according le el position elly ana feah 
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

     
// lw ana fe position awl section
	if(position1.top >= 0 && position1.bottom <= window.innerHeight) {
        section1.classList.add("your-active-class");
        list1.classList.add("listActive");


        section2.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list2.classList.remove("listActive");
        list3.classList.remove("listActive");
        toggle(0);
 
	}


	if(position1.top < window.innerHeight -200 && position1.bottom >= 0) {
		section1.classList.add("your-active-class");
        list1.classList.add("listActive");


        section2.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list2.classList.remove("listActive");
        list3.classList.remove("listActive");
        toggle(0);

	}

// lw ana fe position tany section
    if(position2.top >= 0 && position2.bottom <= window.innerHeight) {
        section2.classList.add("your-active-class");
        list2.classList.add("listActive");


        section1.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list1.classList.remove("listActive");
        list3.classList.remove("listActive");
        toggle(0);

	}


	if(position2.top < window.innerHeight -200 && position2.bottom >= 0) {
		section2.classList.add("your-active-class");
        list2.classList.add("listActive");



        section1.classList.remove("your-active-class");
        section3.classList.remove("your-active-class");
        list1.classList.remove("listActive");
        list3.classList.remove("listActive");
        toggle(0);

	}

// lw ana fe position talt section
if(position3.top >= 0 && position3.bottom <= window.innerHeight) {
    section3.classList.add("your-active-class");
    list3.classList.add("listActive");



    section2.classList.remove("your-active-class");
    section1.classList.remove("your-active-class");
    list2.classList.remove("listActive");
    list1.classList.remove("listActive");
    toggle(0);

}


if(position3.top < window.innerHeight -200&& position3.bottom >= 0) {
    section3.classList.add("your-active-class");
    list3.classList.add("listActive");

    section2.classList.remove("your-active-class");
    section1.classList.remove("your-active-class");
    list2.classList.remove("listActive");
    list1.classList.remove("listActive");

    toggle(0);

}

});
// 3shan 
function toggle(flag){
    var menu = document.getElementById("menu");
    var list1 = document.querySelectorAll("li");
 

    if(flag == 1)
    {
        if(list1[0].style.display == "none")
        {
            list1[0].style.display = "block";
            list1[1].style.display = "block";
            list1[2].style.display = "block";
        }
        else
        {
            list1[0].style.display = "none";
            list1[1].style.display = "none";
            list1[2].style.display = "none";
        }
    }
    else
    {
        if(list1[0].style.display == "block" && list1[1].style.display == "block" && list1[2].style.display == "block")
        {
            list1[0].style.display = "block";
            list1[1].style.display = "block";
            list1[2].style.display = "block";
        }
        else{
            list1[0].style.display = "none";
            list1[1].style.display = "none";
            list1[2].style.display = "none";
        }
    }




}
