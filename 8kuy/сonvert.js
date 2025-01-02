// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
    const num = Number(str);
    
    return num;
  }
  console.log(stringToNumber("1234")); // Вывод: 1234

  // var stringToNumber = function(str){
  //   return parseInt(str);
  // }

  // В JavaScript функция parseInt() используется для преобразования строки в целое число. В отличие от Number(), она работает несколько иначе и имеет свои особенности.

  // Как работает parseInt()
  // Считывает строку посимвольно слева направо:
  
  // Если символ подходит для числа (цифры), он будет обработан.
  // Как только встречается символ, который не может быть частью числа, считывание прекращается.
  // Возвращает целое число:
  
  // Десятичная часть игнорируется (например, "123.45" → 123).
  // Принимает основание системы счисления (опционально):
  
  // Второй аргумент функции позволяет указать систему счисления (по умолчанию — десятичная, то есть 10).


  // var stringToNumber = function(str){
  //   return +str;
  // }

//   Number	Преобразует всю строку в число, включая десятичную часть.	Number("123.45") → 123.45
// Если в строке есть некорректные символы, вернёт NaN.	Number("56abc") → NaN
// Основание системы счисления не поддерживается.