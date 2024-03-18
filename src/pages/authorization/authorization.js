import authorizationPage from "./authorization.hbs";
import Handlebars from 'handlebars';
import {tempProfile} from "../../consts/consts";
import baseButton from "../../components/baseButton/baseButton";
import baseInput from "../../components/baseInput/baseInput";

export default () => {
    const buttons = [
            {
                id: "auth-button",
                className: "green-background",
                type: "submit",
                value: "Войти",
            },
            {
                id: "reg-button",
                className: "red-background",
                type: "button",
                value: "Зарегистрироваться",
            }
        ]
    ;
    const inputs = [
            {
                id: "login",
                type: "text",
                name: "login",
                label: "Логин",
                value: tempProfile.login,
            },
            {
                id: "password",
                type: "password",
                name: "password",
                label: "Пароль",
                value: tempProfile.password,
            },
        ]
    ;
    Handlebars.registerPartial('baseButton', baseButton);
    Handlebars.registerPartial('baseInput', baseInput);
    const context = {
        inputs,
        buttons,
    };
    const template = Handlebars.compile(authorizationPage);
    return template(context);
}
