function situQuiz(arr) {
    let total = 0;
    let mean = 0;
    
    for(let i = 0; i < arr.length; i++) {
      total = total + arr[i];
      mean = Math.floor(total / arr.length);
    }
  
  const modeObj = {};
    for(let j = 0; j < arr.length; j++) {
     if(modeObj[arr[j]] === undefined) {
       modeObj[arr[j]] = 0;
     };
     modeObj[arr[j]] += 1;
    }
    console.log(mean)
  console.log(modeObj)

  let count = 0;
  let mode;
  for(let prop in modeObj) {
    if(modeObj[prop] === count) {
      count = modeObj[prop];
      mode = parseInt(prop);
    }
    else if(modeObj[prop] > count) {
      count = modeObj[prop];
      mode = parseInt(prop);
    }
  }
  console.log(mode);

  if(mean === mode) {
    return true 
  } else 
    return false
}


situQuiz([2,2,4,8,4,4]);
  
  
  