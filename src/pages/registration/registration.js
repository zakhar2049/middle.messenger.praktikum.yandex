import registrationPage from "./registration.hbs";
import baseButton from "../../components/baseButton/baseButton";
import Handlebars from "handlebars";
import {tempProfile} from "../../consts/consts.js";
import baseInput from "../../components/baseInput/baseInput";

export default () => {
    const buttons = [
            {
                id: "reg-button",
                className: "green-background",
                type: "submit",
                value: "Зарегистрироваться",
            },
            {
                id: "auth-button",
                className: "red-background",
                type: "button",
                value: "Войти",
            }
        ]
    ;
    const inputs = [
            {
                id: "email",
                type: "text",
                name: "email",
                label: "Почта",
                value: tempProfile.email,
            },
            {
                id: "login",
                type: "text",
                name: "login",
                label: "Логин",
                value: tempProfile.login,
            },
            {
                id: "first_name",
                type: "text",
                name: "first_name",
                label: "Имя",
                value: tempProfile.firstName,
            },
            {
                id: "second_name",
                type: "text",
                name: "second_name",
                label: "Фамилия",
                value: tempProfile.secondName,
            },
            {
                id: "phone",
                type: "text",
                name: "phone",
                label: "Телефон",
                value: tempProfile.phone,
            },
            {
                id: "password",
                type: "password",
                name: "password",
                label: "Пароль",
                value: tempProfile.password,
            },
            {
                id: "password-repeat",
                type: "password",
                name: "password-repeat",
                label: "Пароль (ещё раз)",
                value: tempProfile.passwordRepeat,
            },
        ]
    ;
    Handlebars.registerPartial('baseInput', baseInput);
    Handlebars.registerPartial('baseButton', baseButton);
    const context = {inputs, buttons};
    const template = Handlebars.compile(registrationPage);
    return template(context);
}
