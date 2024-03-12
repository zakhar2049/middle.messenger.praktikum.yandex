import authorization from "./authorization.js";
import "./authorization.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root.innerHTML = authorization();

    const regButton = document.getElementById('reg-button');
    const authForm = document.getElementById('auth-form');

    regButton.onclick = () => {
        window.location.replace("registration.html");
    }
    authForm.onsubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы авторизации.');
    }
});
