var screenArea = document.getElementById("Answer");
var checkN = false;
function EnterNumber(x, y) {
  if (checkN == true) {
    // if(screenArea.value.split("").fitler((el) => ["/", "*", "+", "-"].includes(el)).length){
    EnterClear();
    checkN = false;
  }
  screenArea.value += x;
}
function EnterOperator(x, y) {
  checkN = false;
  screenArea.value += x;
}
function EnterClear() {
  // screenArea.remove();
  screenArea.value = " ";
}
function EnterEqual() {
  var result = eval(screenArea.value);
  console.log(result);
  screenArea.value = result;
  checkN = true;
}
// console.log(eval("10 + 10")); 
// console.log(eval("1+1"+5)); 
// console.log(eval(5+"1+1")); 

// console.log(eval("5 + 5" + 10)); 

// console.log(eval("5 + 5 + 5" + 10)); 

// console.log(eval(10 + "5 + 5")); 

// console.log(eval(10 + "5 + 5 + 5")); 
// // 20
// //  16
// //  52
// //  515
// //  520
// // 110
// //  115

// var x = 10;
// var y = 20;
// var a = eval("x * y") + "<br>";
// var b = eval("2 + 2") + "<br>";
// var c = eval("x + 30") + "<br>";

// let result = a + b + c;
// console.log(result); //200<br>4<br>40<br>