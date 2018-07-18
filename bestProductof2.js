const bestProductof2 = (array) =>{
  let firstlargest = 1;
  let secondlargest = 1;
  let firstsmallest = -1;
  let secondsmallest = -1;

  let i = 0;
  while(i < array.length){
    if(array[i] > firstlargest){
      firstlargest = secondlargest
      secondlargest = array[i]
    } else if(array[i] < secondsmallest){
      firstsmallest = secondsmallest
      secondsmallest = array[i]
    } 
    i++;
  }
  
  let firstset = firstlargest * secondlargest
  let secondset = firstsmallest * secondsmallest

  if(firstset > secondset){
    return [firstlargest, secondlargest]
  } else if(secondset > firstset){
    return [firstsmallest, secondsmallest]
  }
  
}

bestProductof2([6,-7,0,9,1,-8])