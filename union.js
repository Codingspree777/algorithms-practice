function union(arrayOfArrays){
    //Flat array arguments, then process to reduce data
    return [].concat.apply([], arrayOfArrays).reduce(function(result, current){
      //If my result array doesn't get current element
      return result.indexOf(current) === -1
      //concat current element to result and return it
      ? result.concat(current)
      //Otherwise, just return actual result array
      : result;
    }, []);
  }




var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]