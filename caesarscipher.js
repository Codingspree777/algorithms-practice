function rot13(str) { 
  let mystr = "";
  


  let i = 0; 
    while(i < str.length){
      if(str.charCodeAt([i]) <= 63) {
        mystr += String.fromCharCode(str.charCodeAt([i]));
      } else if(str.charCodeAt([i]) >= 78) {
          mystr += String.fromCharCode(str.charCodeAt([i])- 13);
          }
          else if (str.charCodeAt([i]) >= 65) { 
            mystr += String.fromCharCode(str.charCodeAt([i]) + 13); 
          }
      i++;
    }
return mystr;

}

rot13("SERR YBIR!");