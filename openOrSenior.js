const openOrSenior = (data) => {
  let output = [];

  for(let i = 0; i < data.length; i++){
    let subarr = data[i];
      for(let j = 0; j < subarr.length; j+=2){
        if(subarr[j] === 55){
          j++;
          if(subarr[j] > 7){
            output.push("Senior")
          } else if(subarr[j] <= 7){
            output.push("Open")
          }
        }
        else if(subarr[j] > 55){
          j++;
          if(subarr[j] > 7){
            output.push("Senior")
          } else if(subarr[j] <= 7){
            output.push("Open")
          }
        }   else if(subarr[j] < 55){
              output.push("Open")
            }
      }
  }

  return output;

}

openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])