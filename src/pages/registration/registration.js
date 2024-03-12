import registrationPage from "./registration.tmpl";
import Handlebars from "handlebars";
import {tempProfile} from "../../consts/consts.js";

export default () => {
    const template = Handlebars.compile(registrationPage);
    return template({...tempProfile});
}