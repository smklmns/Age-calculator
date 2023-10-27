const dateBox = document.querySelectorAll('.date-of-birth-box .date-box');
const labels = document.querySelectorAll('.date-of-birth-box .date-box .the-label');
const inputs = document.querySelectorAll('.date-of-birth-box .date-box .the-input');
const errorMessage = document.querySelectorAll('.error-message')
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const resultDays = document.querySelector('.result-days-span');
const resultMonths = document.querySelector('.result-months-span')
const resultYears = document.querySelector('.result-years-span')
const actionButton = document.querySelector('.svg-button')
const restrictingNonNumbers = /\D+/


const today = new Date()
let todayDay = today.getDate();
let todayMonth = today.getMonth() + 1;
let todayYear = today.getFullYear();

function errorCheck() {
  let error = false;
  if(dayInput.value === "") {
    errorMessage[0].textContent = "This field is required"
    errorMessage[0].style.visibility = "visible"
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else if(dayInput.value <= 0 || dayInput.value > 31 
    || restrictingNonNumbers.test(dayInput.value) === true
    || dayInput.value > daysOfMonths[monthInput.value]) {
    errorMessage[0].textContent = "Must be a valid day"
    errorMessage[0].style.visibility = "visible"
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else {
    errorMessage[0].textContent = ""
    errorMessage[0].style.visibility = "hidden"
    labels[0].style.color = "hsl(0, 1%, 44%)";
    inputs[0].style.border = "1px solid hsla(0, 1%, 44%, 0.24)"
  }
  if( monthInput.value === "") {
    errorMessage[1].textContent = "This field is required"
    errorMessage[1].style.visibility = "visible"
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else if(Number(monthInput.value) <= 0 ||
    Number(monthInput.value) > 12 
    || restrictingNonNumbers.test(monthInput.value) === true) {
    errorMessage[1].textContent = "Must be a valid month"
    errorMessage[1].style.visibility = "visible"
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else {
    errorMessage[1].textContent = ""
    errorMessage[1].style.visibility = "hidden"
    labels[1].style.color = "hsl(0, 1%, 44%)";
    inputs[1].style.border = "1px solid hsla(0, 1%, 44%, 0.24)"
  }
  
  if(Number(yearInput.value) > todayYear) {
    errorMessage[2].textContent = "Must be in the past"
    errorMessage[2].style.visibility = "visible"
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else if(yearInput.value === "") {
    errorMessage[2].textContent = "This field is required"
    errorMessage[2].style.visibility = "visible"
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  } else if(restrictingNonNumbers.test(yearInput.value) === true) {
    errorMessage[2].textContent = "Must be a number"
    errorMessage[2].style.visibility = "visible"
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.border = "1px solid hsl(0, 100%, 67%)"
    error = true;
  }
  else {
    errorMessage[2].textContent = ""
    errorMessage[2].style.visibility = "hidden"
    labels[2].style.color = "hsl(0, 1%, 44%)";
    inputs[2].style.border = "1px solid hsla(0, 1%, 44%, 0.24)"
  }
  return error;
}




let daysOfMonths = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};



actionButton.addEventListener('click', () => {
  if(errorCheck() === false) {
    let resultDay = todayDay - Number(dayInput.value);
    let resultMonth = todayMonth - Number(monthInput.value);
    let resultYear = todayYear - Number(yearInput.value);
    if(resultMonth <= 0 && resultDay < 0) {
      resultYear -= 1;
      resultMonth = 12 + resultMonth;
      resultMonth -= 1;
      resultDay = daysOfMonths[todayMonth] + resultDay;
    } else if(resultMonth < 0 && resultDay >= 0) {
      resultYear -= 1;
      resultMonth = 12 + resultMonth;
     } else if(resultMonth > 0 && resultDay < 0) {
      resultMonth -= 1;
      resultDay = daysOfMonths[todayMonth] + resultDay;
    }
    resultYears.textContent = resultYear
    resultMonths.textContent = resultMonth
    resultDays.textContent = resultDay

    resultYears.style.animation = "resizing 800ms linear"
    resultMonths.style.animation = "resizing 800ms linear"
    resultDays.style.animation = "resizing 800ms linear"
  } 
})
