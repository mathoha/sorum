let dropit = document.getElementById("dropit");
let showthis = document.getElementById("showthis")
dropit.addEventListener("mouseover", hot);
dropit.addEventListener("mouseout", cold);

function hot(){
    showthis.classList.toggle("hide");
    dropit.style.backgroundColor = "blue";
};

function cold(){
    dropit.style.backgroundColor = "gold";
};