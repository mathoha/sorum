let dropit = document.getElementById("dropit");
let showthis = document.getElementById("showthis")
dropit.addEventListener("mouseover", hot);

function hot(){
    showthis.classList.toggle("hide");
};