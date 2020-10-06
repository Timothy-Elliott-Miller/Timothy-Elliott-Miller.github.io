var button1 = document.getElementById("button1");
var display1 = document.getElementById("display1");
var count = 0;
console.log("JS loaded")


button1.onclick = function() {button1Clicked()};

function button1Clicked(){
  console.log("button1 clicked")
  count ++;
  display1.innerHTML = count;
}
