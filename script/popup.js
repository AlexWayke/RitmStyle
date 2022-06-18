"use strict"
// Pop-up ==========================
  
const openPopUp = document.querySelectorAll('.button');
const closePopUp = document.getElementById('close_pop_up');
const popUp = document.getElementById('pop_up');

openPopUp.forEach(function (openPopUp){
  openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add("visible");
  });
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove("visible");
});
// Validation ======================

const form = document.getElementById('form');
const formArr = Array.from(form);
const validFromArr = [];
const button = form.elements[".form-button"];

formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFromArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);


function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  };
  
function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.setAttribute("is-valid", "1");
        el.classList.remove('_error');
      } else {
        el.setAttribute("is-valid", "0");
        el.classList.add('_error');
      }
  };

  
function buttonHandler(e) {
    const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });
 
  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }
};
 