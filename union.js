function union(arrayOfArrays){
 let aSet = new Set();
 
 for(let i = 0; i < arrayOfArrays.length; i++){
   let subarr = arrayOfArrays[i]
    for(let j = 0; j < subarr.length; j++){
      if(aSet !== subarr[j]){
        aSet.add(subarr[j])
      }
    }
 }
  return Array.from(aSet)
}

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]