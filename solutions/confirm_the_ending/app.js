function confirmEnding(str, target) {
  let start = str.length - target.length;
  // return str.substring(start);

  // if(str.substring(start) == target){
  //   return true;
  // }else {
  //   return false;
  // }
  return str.substring(start) === target;
}

function upDateUI(){
  let string = document.getElementById('getString').value;
  let target = document.getElementById('getTarget').value;
  let message = '';

  if(!string || !target){
    message = 'Please enter a sting and a target';
  }else if(!confirmEnding(string, target)){
    message = `It doesn't end with ${target}`;
  }else{
    message = `It ends with ${target}`;
  }
  document.getElementById('display').innerHTML = message;
}

document.getElementById('btn').addEventListener('click', upDateUI);

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "pen"));
