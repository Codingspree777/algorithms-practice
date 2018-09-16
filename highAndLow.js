const highAndLow = (str) => {
  let comma = str.split(" ");
  let arr = [];
 
  for(let i = 0; i < comma.length; i++){
    arr.push(Number(comma[i]))
  }
  
  let high = Math.max(...arr);
  let low = Math.min(...arr);

  return `${high}, ${low}`

}


highAndLow("1 2 3 -4 -5"); // return "3 -5"