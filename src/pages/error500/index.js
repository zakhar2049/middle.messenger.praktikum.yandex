import error500 from "./error500.js";
import "./error500.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = error500();

    const backToChatsButton = document.getElementById('back-button');
    backToChatsButton.onclick = () => {
        window.location.replace("chats.html");
    }
});

