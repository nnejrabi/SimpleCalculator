
//What number buttons are pressed
var numButton = document.querySelectorAll(".btn");
var showNum = document.querySelector(".screen");


numButton.forEach(function(button){
  button.addEventListener('click', function(event){
    if(event.target.innerHTML == "C"){
      return showNum.value = "";
    } else if (event.target.innerHTML == "=") {
      return;
    }
    let view = event.target.dataset.num;
    showNum.value += view;
  });
});

//When equal is pressed
var equalButton = document.querySelector(".btn-equal")
equalButton.addEventListener('click', function(event){
  if(showNum.value == ""){
    return alert("Please Enter a Value");
  }
  showNum.value = showNum.value + "=" + eval(showNum.value);
});