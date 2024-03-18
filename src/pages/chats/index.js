import chats from "./chats.js";
import "./chats.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = chats();
});
