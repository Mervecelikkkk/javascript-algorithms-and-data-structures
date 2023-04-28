
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

 return arr.slice(0,arr.length).sort((a,b) => a-b)

}

nonMutatingSort(globalArray);