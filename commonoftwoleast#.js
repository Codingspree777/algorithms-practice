const twoSmallestcommonNum = (arr) => {


for(let i = 0; i < arr.length; i++){
  let subarrOne = arr[0];
  let subarrTwo = arr[1];
  let subarrThree = arr[2];

  let j = 0;
  let k = 0;
  let l = 0;

  while(j < subarrOne.length && k < subarrTwo.length && l < subarrThree.length) {
    if(subarrOne[j] === subarrTwo[k] && subarrOne[j] === subarrThree[l] && subarrTwo[k] === subarrThree[l]){
      return subarrOne[j]
    } if(subarrOne[j] < subarrTwo[k] || subarrOne[j] < subarrThree[l]){
      j++;
    } if(subarrTwo[k] < subarrOne[j] || subarrTwo[k] < subarrThree[l]){
      k++;
    } if(subarrThree[l] < subarrOne[j] || subarrThree[l] < subarrTwo[k]){
      l++;
    }

  }
 
  return -1;

}


}

twoSmallestcommonNum([[1,2,3], [2,3,4,5], [-2,-1,0,3]])

//if none return -1;