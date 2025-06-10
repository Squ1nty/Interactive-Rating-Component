let ratingPage = document.getElementById("ratingPage");
let successPage = document.getElementById("successPage");

let ratingBtns = document.querySelectorAll(".ratingBtn");
let ratingForm = document.getElementById("ratingForm");

let userInputSpan = document.getElementById("userInput");

let buttonClicked;
let isClicked = false;

function alreadyClicked(){
  ratingBtns.forEach(btn => {
    if(btn.classList.contains("active")){
      btn.classList.remove("active");
    }
  });
}

ratingBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    alreadyClicked();

    buttonClicked = btn.dataset.value;
    isClicked = true;

    e.target.classList.remove("active");
    e.target.classList.add("active");
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