const rankings = (arr) => {
  let output = [];
  let rank = 1;

  let i = 0;
  let j = 0;

  while(i < arr.length){
    while(j < arr.length){
      console.log('i', i, 'j', j)
      if(arr[i] < arr[j]){
        rank++;
      }
      j++;
    }
    output.push(rank)
    rank = 1;
    i++;
    j=0;
  }

  return output;

};

rankings([10, 5, 20]); // [2, 3, 1]

