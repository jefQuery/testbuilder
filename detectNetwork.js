// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var startingDigits = cardNumber.slice(0,6);
  var len = cardNumber.length;



  if ((startingDigits === '5018' || 
  	   startingDigits === '5020' || 
  	   startingDigits === '5038' || 
  	   startingDigits === '6304') && 
  	  (len >= 12 && len <=19)){
  	return "Maestro";
  } else if (startingDigits === '6011' && 
  	         (len === 16 ||
  	          len === 19)){
  	return "Discover";
  } else {
  	startingDigits = cardNumber.slice(0, 3);
  }

  var startingNum = Number(startingDigits);
  if ((startingNum < 650 && startingNum > 643) && 
  	  (len === 16 ||
  	   len === 19)){
  	return "Discover";
  } else {
  	startingDigits = cardNumber.slice(0, 2);
  }

  if ((startingDigits === '38' || 
  	   startingDigits === '39') && 
  	   len === 14){
  	return "Diner's Club";
  } else if ((startingDigits === '34' || 
  	   		  startingDigits === '37') && 
  	          len === 15){
  	return "American Express";
  } else if ((startingDigits === '51' || 
  	   		  startingDigits === '52' || 
  	   		  startingDigits === '53' || 
  	   		  startingDigits === '54' || 
  	   		  startingDigits === '55') && 
  	          len === 16){
  	return "MasterCard";
  } else if (startingDigits === '65' && 
  	         (len === 16 ||
  	          len === 19)){
  	return "Discover";
  } else {
  	startingDigits = cardNumber.slice(0, 1);
  }

  if (startingDigits === '4' && 
  	          (len === 13 || 
  	           len === 16 || 
  	           len === 19)){
  	return "Visa";
  } 

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


