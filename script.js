
function showMessageOne() {
    let divOne = document.querySelector(".message1");
    if (divOne.style.display === "none") {
    divOne.style.display = "block";
  } else {
    divOne.style.display = "none";
  }
}

function showMessageTwo() {
    let divTwo = document.querySelector(".message2");
    if (divTwo.style.display === "none") {
    divTwo.style.display = "block";
  } else {
    divTwo.style.display = "none";
  }
}

function showMessageThree() {
    let divThree = document.querySelector(".message3");
    if (divThree.style.display === "none") {
    divThree.style.display = "block";
  } else {
    divThree.style.display = "none";
  }
}

function showMessageFour() {
    let divFour = document.querySelector(".message4");
    if (divFour.style.display === "none") {
    divFour.style.display = "block";
  } else {
    divFour.style.display = "none";
  }
}

function showMessageFive() {
    let divFive = document.querySelector(".message5");
    if (divFive.style.display === "none") {
    divFive.style.display = "block";
  } else {
    divFive.style.display = "none";
  }
}

function showMessageSix() {
    let divSix = document.querySelector(".message6");
    if (divSix.style.display === "none") {
    divSix.style.display = "block";
  } else {
    divSix.style.display = "none";
  }
}

const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
slides.forEach(function(slide) {
slide.classList.remove("active");
});

slides[index].classList.add("active");
}

function nextSlide() {
currentSlide++;

if (currentSlide >= slides.length) {
currentSlide = 0;
}

showSlide(currentSlide);
}

function previousSlide() {
currentSlide--;

if (currentSlide < 0) {
currentSlide = slides.length - 1;
}

showSlide(currentSlide);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);