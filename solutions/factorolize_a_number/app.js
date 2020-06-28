function factorialize(num) {
  let factored = 1;
  while (num > 0) {
    factored = factored *= num;
    num--;
  }
  return factored;
}

// console.log(factorialize(3));
 
function upDateUI(){
  let number = document.getElementById('getnum').value;
  let message = '';
  if(!number || isNaN(number)){
    message = 'You need to enter a number';
  }else{
    message = factorialize(number);
  }

  document.getElementById('display').innerHTML = message;
}

document.getElementById('btn').addEventListener('click', upDateUI);