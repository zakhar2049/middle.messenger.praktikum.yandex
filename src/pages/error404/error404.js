import error404Page from "./error404.hbs";
import Handlebars from "handlebars";
import baseButton from "../../components/baseButton/baseButton";

export default () => {
    const button = {
        id: "back-button",
        className: "error-button green-background",
        type: "button",
        value: "Назад к чатам",
    };
    Handlebars.registerPartial('baseButton', baseButton);
    const context = {...button};
    const template = Handlebars.compile(error404Page);
    return template(context);
}
