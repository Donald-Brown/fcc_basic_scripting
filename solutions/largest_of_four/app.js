function largestOfFour(arr) {
  let resultArr = [];
  for(let i = 0; i < arr.length; i++){
    resultArr.push(Math.max(...arr[i]));
  }
  return resultArr;
}

function updateUI(){
  // found needed to parse the input string or it didn't work
  let input = JSON.parse(document.getElementById('getArrays').value);
  //console.log(input);
  let message = '';
  if(!input){
    message = 'Please enter an array of numeric arrays'
  }else{
    message = `${largestOfFour(input)}`;
  }
  document.getElementById('display').innerHTML = message;
}

document.getElementById('btn').addEventListener('click', updateUI);

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

