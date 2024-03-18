import profilePage from "./profile.hbs";
import Handlebars from "handlebars";
import {tempProfile} from "../../consts/consts";
import userImg from "../../img/user.png";
import baseButton from "../../components/baseButton/baseButton";
import baseInput from "../../components/baseInput/baseInput";


export default () => {
    const buttons = [
            {
                id: "save-button",
                className: "green-background",
                type: "submit",
                value: "Сохранить",
            },
            {
                id: "back-button",
                className: "red-background",
                type: "button",
                value: "Назад",
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
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
            {
                id: "login",
                type: "text",
                name: "login",
                label: "Логин",
                value: tempProfile.login,
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
            {
                id: "first_name",
                type: "text",
                name: "first_name",
                label: "Имя",
                value: tempProfile.firstName,
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
            {
                id: "second_name",
                type: "text",
                name: "second_name",
                label: "Фамилия",
                value: tempProfile.secondName,
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
            {
                id: "nick_name",
                type: "text",
                name: "nick_name",
                label: "Имя в чате",
                value: tempProfile.nickName,
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
            {
                id: "phone",
                type: "text",
                name: "phone",
                label: "Телефон",
                value: tempProfile.phone,
                labelClassName: "profile-input-label",
                inputClassName: "profile-input-value",
            },
        ]
    ;
    Handlebars.registerPartial('baseButton', baseButton);
    Handlebars.registerPartial('baseInput', baseInput);
    const context = {...tempProfile, userImg, inputs, buttons};
    const template = Handlebars.compile(profilePage);
    return template(context);
}
