// Passes fcc challenge
function reverseString(str) {
  let backwardStr = "";
  for(let i = str.length -1; i >= 0; i--){
    backwardStr += str[i];
  }
  return backwardStr;
}

function convertString(){
  let str = document.getElementById('getstring').value;
  //console.log(str);
  if(!str){
    document.getElementById('display').innerHTML = 'Please Enter a String';
    return;
  }

  let backwardStr = "";
  for(let i = str.length -1; i >= 0; i--){
        backwardStr += str[i];
  }
  document.getElementById('display').innerHTML = backwardStr;
}

document.getElementById('btn').addEventListener('click', convertString);