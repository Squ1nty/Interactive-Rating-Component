let ratingPage = document.getElementById("ratingPage");
let successPage = document.getElementById("successPage");

let ratingBtns = document.querySelectorAll(".ratingBtn");
let ratingForm = document.getElementById("ratingForm");

let userInputSpan = document.getElementById("userInput");

let buttonClicked;
let isClicked = false;

ratingBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    buttonClicked = btn.dataset.value;
    isClicked = true;
    submitBtn.classList.remove("enableActive");
    submitBtn.classList.add("enableActive");
  })
});

//This event listener will listen for a submit then save the number
ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(!isClicked){
    console.log("No rating selected!");
    return;
  }
  console.log("Rating Selected: " + buttonClicked);
  userInputSpan.textContent = buttonClicked;

  ratingPage.classList.toggle("active");
  successPage.classList.toggle("active");
});