const meuBrasil = document.querySelector("#cookie");


let cookies = 0;

function clicar() {
    cookies++;
    document.getElementById("contador").textContent = cookies;
}