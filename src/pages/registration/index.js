import registration from "./registration.js";
import "./registration.scss";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#app');
    root.innerHTML = registration();

    const authButton = document.getElementById("auth-button");
    const regForm = document.getElementById("reg-form");

    authButton.onclick = () => {
        window.location.replace("../authorization/authorization.html");
    }
    regForm.onsubmit = (e) => {
        e.preventDefault();
        console.log("Отправка формы регистрации.");
    }
});
