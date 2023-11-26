// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו

function declareBtns() {
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");

  burger_btn.addEventListener("click", function () {

    (nav_open.style.display != "block") ? nav_open.style.display = "block" : nav_open.style.display = "none";
  })
}


function handleWindowSize() {
  let screenWidth = window.innerWidth;
  const navOpenElement = document.getElementById("nav_open");

  if (screenWidth > 768) {
    navOpenElement.style.display = "block";
  } else {
    navOpenElement.style.display = "none";
  }
}

window.addEventListener('resize', handleWindowSize);

handleWindowSize();

declareBtns();