

function writeCards(names, eventName){
  var result = []
  for (let counter= 0; counter < names.length; counter++) {
    var ans = `Thank you, ${names[counter]}, for the wonderful ${eventName} gift!`;
    result.push(ans);

  }
  console.log(result);
  return result;
}
function countDown(num){
  while(num >= 0){
    console.log(num);
    num--;
  }
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");