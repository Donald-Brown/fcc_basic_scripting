function bouncer(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
  //return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]);
console.log(bouncer([null, NaN, 1, 2, undefined]));