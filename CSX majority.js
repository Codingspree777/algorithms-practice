const majority = (array, callback) =>{
  let arrhalf = array.length / 2

  const final = array.reduce((counter, curr)=>{
    if(callback(curr) === true){
      counter++
    } 
    return counter
  }, 0)
  return final > arrhalf
}


// Uncomment these to check your work!
var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
