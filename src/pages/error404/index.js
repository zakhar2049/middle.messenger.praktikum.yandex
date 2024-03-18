import error404 from "./error404.js";
import "./error404.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = error404();

    const backToChatsButton = document.getElementById('back-button');
    backToChatsButton.onclick = () => {
        window.location.replace("../chats/chats.html");
    }
});
