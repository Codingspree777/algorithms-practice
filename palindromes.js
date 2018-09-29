function palindromes(str) {
  let cleanstrings = str.replace(/[^0-9a-z]/gi, '');
  let lowerstr = cleanstrings.toLowerCase();
  let mystr = "";
  console.log(cleanstrings);
  
    for(let i=lowerstr.length-1; i>=0; i--) { 
      mystr += lowerstr[i];
    }
    if(mystr === lowerstr) {
      return true;
    } else { 
      return false;
    }
}
//test