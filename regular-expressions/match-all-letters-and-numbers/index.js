
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // find 31 alphanumeric characters in quoteSample
let result = quoteSample.match(alphabetRegexV2).length;