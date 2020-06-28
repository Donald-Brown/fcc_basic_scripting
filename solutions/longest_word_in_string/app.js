function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let longest = 0;
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].length > longest){
      longest = strArr[i].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //logs 6
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // logs 19