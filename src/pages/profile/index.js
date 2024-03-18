import profile from "./profile.js";
import "./profile.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = profile();

    const backToChatsButton = document.getElementById('back-button');
    const profileForm = document.getElementById("profile-form");
    backToChatsButton.onclick = () => {
        window.location.replace("../chats/chats.html");
    }
    profileForm.onsubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы профиля.');
    }
});
