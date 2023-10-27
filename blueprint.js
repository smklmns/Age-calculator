let days = {
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
}

let daysN = 3;
let monthsN = 5;
let yearsN = 1994;

const date = new Date();

let day = 2;
let month = 4
let year = date.getFullYear();

let resultOne = year - yearsN;
let resultTwo = month - monthsN;
let resultThree = day - daysN;
let newResultThree = 0;
if(resultTwo < 0 && resultThree < 0) {
  resultOne - 1;
   resultTwo = 12 + resultTwo
   resultTwo -= 1;
   newResultThree = days[resultTwo] + resultThree;
  console.log(resultTwo)
 
}