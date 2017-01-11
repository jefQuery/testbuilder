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
  var startingDigits = cardNumber[0] + cardNumber[1];
  var len = cardNumber.length;

  if ((startingDigits === '38' || 
  	   startingDigits === '39') && 
  	   len === 14){
  	return "Diner's Club";
  } else if ((startingDigits === '34' || 
  	   		  startingDigits === '37') && 
  	          len === 15){
  	return "American Express";
  }else if (cardNumber[0] === '4' && 
  	          (len === 13 || 
  	           len === 16 || 
  	           len === 19)){
  	return "Visa";
  } else if ((startingDigits === '51' || 
  	   		  startingDigits === '52' || 
  	   		  startingDigits === '53' || 
  	   		  startingDigits === '54' || 
  	   		  startingDigits === '55') && 
  	          len === 16){
  	return "MasterCard";
  }
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


