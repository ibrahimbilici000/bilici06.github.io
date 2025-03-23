// script.js
function showMessage() {
    let userName = prompt("Adınızı girin:");
    if (userName) {
        alert("Merhaba, " + userName + "! Hoş geldiniz.");
        let welcomeMessage = document.getElementById("welcomeMessage");
        if (!welcomeMessage) {
            let messageElement = document.createElement("p");
            messageElement.id = "welcomeMessage";
            messageElement.innerText = "Hoş geldin, " + userName + "!";
            document.body.appendChild(messageElement);
        } else {
            welcomeMessage.innerText = "Hoş geldin, " + userName + "!";
        }
    }
}
