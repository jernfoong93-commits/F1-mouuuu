const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

yes.onclick = function () {
    message.innerHTML = "YAY!! ❤️";
}

no.onmouseover = function () {
    no.style.position = "absolute";
    no.style.left = Math.random()*80 + "%";
    no.style.top = Math.random()*80 + "%";
}