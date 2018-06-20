const objOfMatches = (arr1, arr2, callback) => {
  const buildObj = arr1.reduce((myObj, key)=>{
   const testreduce = arr2.reduce((value, nxvalue)=>{ 
     if(callback(key) === nxvalue) {
      myObj[key] = nxvalue
      }
    },0)
    return myObj
  }, {});
    return buildObj

var arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
var arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
