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
  
  
  }
  
  
  situQuiz([14,18,15,18,22,15,14,22,0,15,15]);
  