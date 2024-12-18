
//Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

//Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// Solution

// function makeNegative(num) {
//     // if (num > 0) {
//     //   return -num;
      
    
//     // } else {
//     //     return num;
//     // }
//     return num > 0 ? -num : num
//     }

//     makeNegative(-10);    // return -1
// console.log(makeNegative(-10));

// Convert boolean values to strings 'Yes' or 'No'.
// Instructions

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    return bool ? "Yes" : "No"
  }
  console.log(boolToWord(false));

  //let boolToWord = bool => bool ? 'Yes' : 'No';


// Description
//  Terminal game combat function

// VIM
// EMACS
// Instructions
// Output
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.


// function combat(health, damage) {
//     if (health < damage) {
//         return 0
//     } else {
//         return health - damage
//     }
// }
// console.log(combat(10, 50)) // 50;

  //Если урон больше или равен здоровью → здоровье становится 0.
// Если урон меньше здоровья → здоровье уменьшается на величину урона.

// function combat(health, damage) {
// 	return health < damage ? 0 : health - damage
// }
// console.log(combat(100, 50)) // 50;

// Ваши одноклассники попросили вас скопировать для них документы. Вы знаете, что одноклассников 'n', а в документах 'm' страниц. Ваша задача - вычислитџ, сколько чистых страниц вам нужно. Если n < 0 или m < 0, верните 0.Если у вас n одноклассников, и каждому нужно сделать копию документа, то вам нужно скопировать все m страниц для каждого из n одноклассников.
// Таким образом, общее количество страниц, которые нужно скопировать, равно произведению n * m.
// Если одно из значений отрицательное, возвращаем 0.

function paperwork(n, m) {
  if (n < 0 || m < 0 ){
    return 0
  } 
  return n * m
}
console.log(paperwork(5,5)) // 25;
