function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a,b) => a-b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));