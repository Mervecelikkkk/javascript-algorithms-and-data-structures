
function sumAll(arr) {
    var sum = 0;
    arr.sort(function(a,b) {return a-b;});
    for (var i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  }

  
sumAll([1, 4]); // test case

// return 10