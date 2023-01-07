// -------------- 問１ --------------
const array = [2, 4, 7, 5, 4, 3, 8];

const filteredArray = array.filter(function (ele, i) {
  return array.indexOf(ele) === i;
})

console.log(filteredArray);
// ---------------------------------


// -------------- 問２ --------------
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const years = [2020, 2021];
for (let i = 0; i < years.length; i++) {
  if (leapYear(years[i])) {
    console.log(`${years[i]}年はうるう年です。`)
  }
  else {
    console.log(`${years[i]}年はうるう年ではありません。`)
  }
}
// ---------------------------------