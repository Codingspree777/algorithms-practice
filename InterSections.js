// function interSection(arrayOfArrays){
//     let newarr = [];
//     const modeObj = {};
  
//     for(let i = 0; i < arrayOfArrays.length; i++){
//       let subarr = arrayOfArrays[i];
//       for(let j = 0; j < subarr.length; j++){
//         if(modeObj[subarr[j]] === undefined) {
//         modeObj[subarr[j]] = 0;
//         } 
//         modeObj[subarr[j]] += 1;
//       }
//     }
//      console.log(modeObj)
//      let track = arrayOfArrays.length
     
//     for(let prop in modeObj) {
//       if(modeObj[prop] === track) {
//         newarr.push(parseInt(prop));
//       }
//     }
//     return newarr
//   }


  /// for-loop
  function intersection(arrayOfArrays) {
    let newarr = []
    let auxarr = []
  
    for(let j = 0; j < arrayOfArrays.length; j++){
      let arr1 = arrayOfArrays[0]
      let arr2 = arrayOfArrays[1]
    }
  
    for(let i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) !== -1){
        auxarr.push(arr1[i])
      }
    }
  
    let joined = [].concat(...arrayOfArrays)
  
    for(let k = 0; k < auxarr.length; k++){
      if(joined.indexOf(auxarr[k]) !== -1) {
        newarr.push(auxarr[k])
      }
    }
  
  
  return newarr;
  
  }


intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1,10,15,5,20]]);