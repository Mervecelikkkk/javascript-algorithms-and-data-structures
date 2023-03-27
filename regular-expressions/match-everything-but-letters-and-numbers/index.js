
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length; 

 // 6
 // [ ' ', ' ', ' ', ' ', ' ', '.' ]  find 6 non-alphanumeric characters in the string