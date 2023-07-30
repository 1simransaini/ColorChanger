var buttons= document.querySelectorAll('.button');
var body=document.querySelector('body');

buttons.forEach(function (button){
  button.addEventListener('click', function (e){
    // console.log(e.target);
    if(e.target.id === "red" || "white" || "blue" || yellow){
      body.style.backgroundColor = e.target.id;
    }
  })
})