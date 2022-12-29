



document.getElementById("myId").addEventListener("mouseover",funOfMine);


function funOfMine() {
    let x = Math.floor(Math.random() * 3500);
    document.getElementById("myId").style.top =  x + "px";
    document.getElementById("myId").style.left =  x + "px";
    document.getElementById("myId").style.bottom =  x + "px";

}