"use strict";
// CHARACTER MAIL CHECK
const inputEmail = document.querySelector(".input-email");
const controlEmail = document.querySelector(".control-email");
const personalInfo = document.querySelector(".personal-info");
const btnSubmit = document.querySelector(".btn");
const errorEmail = document.querySelector(".error-email");
const checkEmail = function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(inputEmail.value)) {
    errorEmail.classList.remove("hidden");
    setTimeout(function () {
      errorEmail.classList.add("hidden");
    }, 2000);
  } else {
    controlEmail.classList.toggle("hidden");
    personalInfo.classList.toggle("hidden");
  }
};
btnSubmit.addEventListener("click", checkEmail);

// VIEW MORE - VIEW LESS
const btnsView = document.querySelectorAll("#job-info button");
const cardView = document.querySelectorAll(".card-view");

for (let i = 0; i < btnsView.length; i++)
  btnsView[i].addEventListener("click", function () {
    cardView[i].classList.toggle("hidden");
    if (cardView[i].classList.contains("hidden")) {
      btnsView[i].textContent = "\u25BC VIEW MORE";
    } else {
      btnsView[i].textContent = "\u25B2 VIEW LESS";
    }
  });
