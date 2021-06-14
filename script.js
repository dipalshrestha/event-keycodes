keys = document.querySelectorAll(".key");

keys.forEach(key =>
    key.style.display = "none"
);
keys[keys.length - 1].style.display = "block";
window.addEventListener("keydown", function(event) {
    showAll();
    keys[0].innerText = event.key;
    keys[1].innerText = event.keyCode;
    keys[2].innerText = event.code;
})

function showAll(){
    keys.forEach(key => key.style.display = "inline-block")
    keys[keys.length - 1].style.display = "none";
}