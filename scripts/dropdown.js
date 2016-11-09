/*
FILE NAME: scripts/dropdown.js
WRITTEN BY: Åsmund Staldvik
WHEN: October 2016
PURPOSE: Drops a menu(width id = "dropdownmenu") when user hovers over the elment( with id = "dropit")
*/

let dropit = document.getElementById("dropit");
let showthis = document.getElementById("dropdownmenu")
dropit.addEventListener("mouseover", function() {
    hot();
    drops();
});
dropit.addEventListener("mouseout", cold);
showthis.addEventListener("mouseover", hot);
showthis.addEventListener("mouseout", cold);

function hot(){
    showthis.style.display = "block";
};

function cold(){
    showthis.style.display = "none";
};