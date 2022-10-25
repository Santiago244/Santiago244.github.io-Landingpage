// Header Buttons
// let btn = document.getElementById("btn");
let buttonA = document.getElementById("button")
// Imagen
let imagen = document.getElementById("img");
// Second Animation
let request = document.getElementById("request");
let deployment = document.getElementById("animationDeploy") 

function firstAnimation(){
    buttonA.classList.add("hola")
    imagen.classList.add("img__cellphone-animation")
    // btn.classList.add("btn");
    setTimeout(()=>{
buttonA.classList.remove("hola")
imagen.classList.remove("img__cellphone-animation")
// btn.classList.remove("btn");
    }, 4000);
};
buttonA.addEventListener('click', firstAnimation)

function requestSecondAnimation(){
    deployment.classList.add("deployment");
    setTimeout(()=>{
        deployment.classList.remove("deployment")
    }, 6000);
}

request.addEventListener("click", requestSecondAnimation)

