const highestProductof2 = (array) =>{
  if(array.length < 2){
    return "not possible"
  }
  
  let secondhighest= 1;
  let highest = 1;
  let secondlowest = -1;
  let lowest = -1;

  let i = 0;
  while(i < array.length){
    if(array[i] > highest){
      highest = array[i]
    } else if(array[i] > secondhighest){
      secondhighest = array[i]
    } else if(array[i] < secondlowest){
      secondlowest = lowest
      lowest = array[i]
    } 
    i++;
  }

     console.log(secondhighest)
     console.log(highest)
     console.log(secondlowest)
     console.log(lowest)
   
  let firstset = highest * secondhighest
  let secondset = lowest * secondlowest

  if(firstset > secondset){
    return [highest, secondhighest]
  } else if(secondset > firstset){
    return [lowest, secondlowest]
  }
  
}

highestProductof2([12,-10,-7,9,0,1,-8,])