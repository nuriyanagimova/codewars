function numberToString(num) {
 
    return String(num);
   }
   
   function numberToString(num) {
     return num.toString();
   } 

// Более универсальный способ. Работает с любыми типами данных, включая null и undefined.
// Подходит для преобразования значения в строку в любых сценариях.
// num.toString():

// Чаще используется, если точно известно, что значение — это число (или другой тип, у которого есть метод toString).
// Может вызывать ошибку, если значение — null или undefined.