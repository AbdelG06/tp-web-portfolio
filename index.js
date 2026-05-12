console.log("Salut le JavaScript marche !");

const btnMessage = document.getElementById("btn-message");
const message = document.getElementById("message");

btnMessage.addEventListener("click",function() {
    message.textContent = "Vous avez cliqué sur le bouton !";
    message.style.color = "blue";
});