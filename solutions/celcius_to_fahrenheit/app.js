function convertTemp() {
  //Initialize an empty message string
  let message = "";
  // Retrieve temp from user
  let temp = document.getElementById("temp").value;
  // cover the event that no temp was entered
  // if temp then convert it
  if (!temp) {
    message = `You need to enter a temperature to convert`;
  } else {
    temp = (temp * 9) / 5 + 32;
    message = `The temperature in Fahrenheit is: ${temp} &#xb0;F`;
  }
  // fill the div with result
  document.getElementById("display").innerHTML = message;
}
// add event listener to button so the function is called when the 
// user is ready
document.getElementById("btn").addEventListener("click", convertTemp);
