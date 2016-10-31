let dropit = document.getElementById("dropit");
let showthis = document.getElementById("showthis")
dropit.addEventListener("mouseover", function() {
    hot();
    drops();
});
dropit.addEventListener("mouseout", cold);
showthis.addEventListener("mouseover", hot);
showthis.addEventListener("mouseout", cold);

function hot(){
    dropit.style.backgroundColor = "blue";
    showthis.style.display = "block";
};

function cold(){
    showthis.style.display = "none"
    dropit.style.backgroundColor = "gold";
};

function drops(){
    let id = setInterval(frame, 1);
    let high = 0;
    function frame(){
        if (high == 100) {
            clearInterval(id);
        } else {
            high += 5;
            showthis.style.height = high+'px';
        }
    }
}