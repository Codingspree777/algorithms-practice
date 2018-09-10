const sumTwoSmallestNumbers = (numbers) => {  
  //Code here 
  let arr = [];
  let lowest = 0;

  let i = 0;
  let j = 1;
  while(i < numbers.length){
    while(j < numbers.length){
      arr.push(numbers[i]+ numbers[j])
      j++;
    }
    i++;
    j=i+1
  }
  console.log(arr)
  return Math.min(...arr)


}
  sumTwoSmallestNumbers([15, 28, 4, 2, 43])
  