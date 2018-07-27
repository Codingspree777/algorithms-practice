const highestProductof3 = (array) =>{
  if(array.length < 3){
    return "not possible"
  }
  let thirdhighest = 1;
  let secondhighest= 1;
  let highest = 1;
  let secondlowest = -1;
  let lowest = -1;

  let i = 0;
  while(i < array.length){
    if(array[i] > highest){
      thirdhighest = highest
      highest = array[i]
    } else if(array[i] > secondhighest){
      secondhighest = array[i]
    } else if(array[i] > thirdhighest){
      thirdhighest = array[i]
    } else 
    if(array[i] < secondlowest){
      secondlowest = lowest
      lowest = array[i]
    } else if(array[i] < lowest){
      lowest = array[i]
    }
    i++;
  }
   
  let firstset = highest * secondhighest * thirdhighest;
  let secondset = lowest * secondlowest * highest;

  if(firstset > secondset){
    return [highest, secondhighest, thirdhighest]
  } else if(secondset > firstset){
    return [lowest, secondlowest, highest]
  } 
}

highestProductof3([4,5,2,-8,6,-9])