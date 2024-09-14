const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const changed=document.getElementById("change");
const btn=document.getElementById("btns");

function getRandom() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click",function () {
   let hexs ="#" ;
   let randomNums =getRandom()
   for (let i = 0; i < 6; i++) {
    hexs+=hex[getRandom()]
   }
   changed.textContent =hexs;
   document.body.style.backgroundColor = hexs;
})