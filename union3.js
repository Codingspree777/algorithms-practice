const union = (arrayOfArrays) => {
 let aSet = new Set()
  
  let firstarr = arrayOfArrays.reduce((reduce, arr) =>{
    return reduce.concat(arr);
  }, []).reduce((output, curr, i)=>{
    if(!aSet.has(curr)) {
      aSet.add(curr)
    }
  }, new Set())
  return Array.from(aSet)
}

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
union([arr1, arr2, arr3]);
