const min = Math.floor(Math.random() * (59 - 0) + 0);

let quarter;

if ( min <= 15) {
  quarter = "першу";
} else if (min <= 30) {
  quarter = "другу";
} else if (min <= 45) {
  quarter = "третю";
} else {
  quarter = "четверту";
}

alert(`${min} входить у ${quarter} чверть`);

// const num = prompt("Ввеліть число від 1 до 4")
// let result = ''

// switch(num){
//     case '1' :
//         result = "зима"
//         break;

//         case '2' :
//         result = "весна"
//         break;

//          case '3' :
//         result = "літо"
//         break;

//         case '4' :
//         result = "осінь"
//         break;

//         default: 
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно"
// }


// console.log(result)


// function isAdult(age){
//  return age >= 18  ? true  : confirm("Вам менше 18. Продовжити?")
// }
// isAdult(1)
