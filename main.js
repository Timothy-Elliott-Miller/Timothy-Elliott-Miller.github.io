var button = document.getElementById("button1");
var display = document.getElementById("display1");
var count = 0;


button.onclick = function() {button1Clicked()};

function button1Clicked(){
  console.log("button1 clicked")
  count ++;
  display.text = count;
}
