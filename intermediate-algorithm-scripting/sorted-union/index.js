
function uniteUnique(arr) {
    return [].slice.call(arguments).reduce(function(a, b) {
      return [].concat(
        a, 
        b.filter(function(e, currentIndex) {
          return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
        }));
    }, []);
  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
