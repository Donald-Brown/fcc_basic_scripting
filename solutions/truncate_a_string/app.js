function truncateString(str, num) {
  if(num < str.length){
    // this also works
    // str.aubstring(0,num) + '...';
    return str.slice(0, num) + "...";
  }
  return str;
}

function udateUI(){
  let string = document.getElementById('getString').value;
  let number = document.getElementById('getNum').value;
  let message = '';

  if(!string || !number){
    message = 'Please enter a string and a length to truncate';
  }else{
    message = truncateString(string, number);
  }

  document.getElementById('display').innerHTML = message;
}

document.getElementById('btn').addEventListener('click', udateUI);

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(truncateString("A-", 1));