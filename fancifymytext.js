alert("Hello world");
function changeFontSize() {
  document.getElementById("textInput").style.fontSize = "4em";
}
function FancyShmancy() {
  document.getElementById("textInput").style.fontSize = "30px";
  document.getElementById("textInput").style.color = "red";
}
function BoringBetty() {
  document.getElementById("textInput").style.fontSize = "1em";
  document.getElementById("textInput").style.color = "black";
}
function fancyAlert() {
  document.getElementById("textInput").style.fontWeight = "bold";
  document.getElementById("textInput").style.color = "blue";
  document.getElementById("textInput").style.textDecoration = "underline";
  alert("fancy alert");
}
function boringAlert() {
  document.getElementById("textInput").style.fontWeight = "normal";

  alert("boring alert");
}
function moo() {
  document.getElementById("textInput").style.textTransform = "uppercase";
  var checked = document.getElementById("textInput").value.split(" ");
  document.getElementById("textInput").value = checked.join("-Moo");
}
