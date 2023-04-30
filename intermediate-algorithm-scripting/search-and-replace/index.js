
function myReplace(str, before, after) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.substring(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);
  }

  function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

// test case

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// return "A quick brown fox leaped over the lazy dog"