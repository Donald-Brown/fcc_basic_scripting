function frankenSplice(arr1, arr2, n) {
  // let newArr = arr2.slice(0, n);
  // for(let i = 0; i < arr1.length; i++){
  //   newArr.push(arr1[i]);
  // }
  // let back = arr2.slice(n);
  // for(let i = 0; i < back.length; i++){
  //   newArr.push(back[i]);
  // }
  // return newArr;

  // this is probably a bit better but mine works
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));