function titleCase(str) {
  let arr = str.split(" ");
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(
      element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase()
    );
  });
  return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
