function mutation(arr) {
  let arr2 = arr[0].toLowerCase();
  let arr3 = arr[1].toLowerCase();
  for(let i = 0; i < arr3.length; i++){
    if(!arr2.includes(arr3[i])){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));