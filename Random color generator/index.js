const color =["red", "blue", "gray","purple","indigo"];

const changed=document.getElementById("change");
const btn=document.getElementById("btns");

//to generate random colors
function getRandom() {
 return Math.floor(Math.random() * color.length)  ; 
}

btn.addEventListener("click", function () {
    const randomNumber = getRandom();
    changed.textContent = color[randomNumber];
    document.body.style.backgroundColor = color[randomNumber]
})