const multiMap = (arr, functions) =>{

const buildObj = arr.reduce((myObj, key)=>{
  const value = functions.reduce((output, call)=>{
    output.push(call(key));
    return output
    }, [])
     myObj[key] = value
     return myObj
  }, {})
 return buildObj
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
var items = ['catfood', 'glue', 'beer'];
var functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }