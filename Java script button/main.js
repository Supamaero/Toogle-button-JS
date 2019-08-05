let parentClass = document.querySelectorAll(".click");
let   but = document.getElementsByTagName("button");
let inputValue = document.querySelectorAll(".click");

document.addEventListener("click", doSomething);
function doSomething(e){
    for(let i = 0; i < but.length; i++){
      if (e.target.value === but[i].value){
        e.target.style.backgroundColor = "#00A958"
        console.log(e.target.value);
        inputValue.value = e.target.value;
      }else{
        parentClass[i].style.backgroundColor = "#F2F2F2";    
      }
    }
}
