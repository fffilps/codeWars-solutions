function incrementString (strng) {
  // return incrementedString
var number = strng.match(/\d+/) === null ? 0 : strng.match(/\d+/)[0];
  
  // Store number's length
  var numberLength = number.length

  // Increment number by 1
  number = (parseInt(number) + 1).toString();
  
  // If there were leading 0s, add them again
  while (number.length < numberLength) {
    number = "0" + number;
  }
    
  return strng.replace(/[0-9]/g, '').concat(number);
}
