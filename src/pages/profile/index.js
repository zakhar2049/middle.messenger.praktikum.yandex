import profile from "./profile.js";
import "./profile.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = profile();

    const signInButton = document.getElementById('back');
    signInButton.onclick = () => {
        window.location.replace("chats.html");
    }
});