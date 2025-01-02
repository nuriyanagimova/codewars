const stringToNumber = function(str){
  const num = Number(str);
  
  return num;
}
console.log(stringToNumber("1234")); // Вывод: 1234

// var stringToNumber = function(str){
//     return parseInt(str);
//   }

// function numberToString(num) {
//     return ''+num;
//   }
// Этот подход удобен для простых случаев, когда точно известно, что входное значение — число.
// Если нужна универсальность (например, работа с null или undefined), лучше использовать String().





