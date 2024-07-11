let curruntDisplay = "";
document.querySelector("#display").value = curruntDisplay;

function zero() {
  curruntDisplay = curruntDisplay + "0";
  document.querySelector("#display").value = curruntDisplay;
}
function one() {
  curruntDisplay = curruntDisplay + "1";
  document.querySelector("#display").value = curruntDisplay;
}
function two() {
  curruntDisplay = curruntDisplay + "2";
  document.querySelector("#display").value = curruntDisplay;
}
function three() {
  curruntDisplay = curruntDisplay + "3";
  document.querySelector("#display").value = curruntDisplay;
}
function four() {
  curruntDisplay = curruntDisplay + "4";
  document.querySelector("#display").value = curruntDisplay;
}
function five() {
  curruntDisplay = curruntDisplay + "5";
  document.querySelector("#display").value = curruntDisplay;
}
function six() {
  curruntDisplay = curruntDisplay + "6";
  document.querySelector("#display").value = curruntDisplay;
}
function seven() {
  curruntDisplay = curruntDisplay + "7";
  document.querySelector("#display").value = curruntDisplay;
}
function eight() {
  curruntDisplay = curruntDisplay + "8";
  document.querySelector("#display").value = curruntDisplay;
}
function nine() {
  curruntDisplay = curruntDisplay + "9";
  document.querySelector("#display").value = curruntDisplay;
}
function plus() {
  curruntDisplay = curruntDisplay + "+";
  document.querySelector("#display").value = curruntDisplay;
}
function sub() {
  curruntDisplay = curruntDisplay + "-";
  document.querySelector("#display").value = curruntDisplay;
}
function multi() {
  curruntDisplay = curruntDisplay + "*";
  document.querySelector("#display").value = curruntDisplay;
}
function slash() {
  curruntDisplay = curruntDisplay + "/";
  document.querySelector("#display").value = curruntDisplay;
}
function dot() {
  curruntDisplay = curruntDisplay + ".";
  document.querySelector("#display").value = curruntDisplay;
}
function c() {
  curruntDisplay = " ";
  document.querySelector("#display").value = curruntDisplay;
}
function equal() {
  curruntDisplay = eval(curruntDisplay);
  document.querySelector("#display").value = curruntDisplay;
}
