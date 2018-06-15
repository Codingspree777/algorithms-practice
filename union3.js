const union = (arrayOfArrays) => {
  const noDupeSet = arrayOfArrays.reduce((concatarr, arr) =>{
    return concatarr.concat(arr);
  }, []).reduce((mySet, num)=>{
    if(!mySet.has(num)) {
      mySet.add(num)
    }
    return mySet
  }, new Set())
  return Array.from(NoDupeSet)
}

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
union([arr1, arr2, arr3]);
