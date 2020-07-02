function repeatStringNumTimes(str, num) {
  let newStr = '';
  for(let i = num; i > 0; i--){
    newStr += str;
  }
  return newStr;
}

function updateUI(){
  let message = '';
  let string = document.getElementById('getString').value;
  let number = document.getElementById('getNum').value;

  if(!string || !number){
    message = 'Please enter a string and a number';
  }else{
    message = repeatStringNumTimes(string, number);
  }
  document.getElementById('display').innerHTML = message;
}

document.getElementById('btn').addEventListener('click', updateUI);

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 0));