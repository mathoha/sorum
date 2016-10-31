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
    showthis.style.display = "none"
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