
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
    return s.replace(/!/g, '') ;
  }
  console.log(removeExclamationMarks('Hello World!')) // Hello World;
  
  function removeExclamationMarks(s) {
    return s.split('!').join('');
  }