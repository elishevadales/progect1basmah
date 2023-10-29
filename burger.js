// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו

function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    // הוספתי - לא עובד

    (nav_open.style.display != "block") ?  nav_open.style.display = "block"  :  nav_open.style.display = "none";
   
    // if(nav_open.style.display != "block"){
    //   nav_open.style.display = "block";
    // }
    // else{
    //   nav_open.style.display = "none";
    // }
  })
}


function handleWindowSize() {
  let screenWidth = window.innerWidth;
  const navOpenElement = document.getElementById("nav_open");

  if (screenWidth > 768) {
    navOpenElement.style.display = "block";
  } else {
    navOpenElement.style.display = "none"; // or "block" or any other value depending on your needs
  }
}

// Attach an event listener to the window's resize event
window.addEventListener('resize', handleWindowSize);

// Call the function initially to set the initial state
handleWindowSize();

declareBtns();