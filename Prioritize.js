const prioritize = (array, callback) => {

const final = array.reduce((myObj, curr) => {
  if (callback(curr) === true) {
    myObj.true.push(curr)
  }  else {
    myObj.false.push(curr)
  }
    return myObj;
}, {"true": [], "false": []})
  
  return final.true.concat(final.false)
}



// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
var tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']