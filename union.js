const union = (arrayOfArrays) => {
  let aSet = new Set()
   
   let firstarr = arrayOfArrays.reduce((output, curr) =>{
     return output.concat(curr);
   }, []).reduce((output2, curr2)=>{
     if(!aSet.has(curr2)) {
       aSet.add(curr2)
     }
   }, 0)
   return Array.from(aSet)
 }
 
 var arr1 = [5, 10, 15];
 var arr2 = [15, 88, 1, 5, 7];
 var arr3 = [100, 15, 10, 1, 5];
 union([arr1, arr2, arr3]);
 