function interSection(arrayOfArrays){
    let newarr = [];
    const modeObj = {};
  
    for(let i = 0; i < arrayOfArrays.length; i++){
      let subarr = arrayOfArrays[i];
      for(let j = 0; j < subarr.length; j++){
        if(modeObj[subarr[j]] === undefined) {
        modeObj[subarr[j]] = 0;
        } 
        modeObj[subarr[j]] += 1;
      }
    }
     console.log(modeObj)
     let track = arrayOfArrays.length
     
    for(let prop in modeObj) {
      if(modeObj[prop] === track) {
        newarr.push(parseInt(prop));
      }
    }
    return newarr
  }

}

intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1,10,15,5,20]]);