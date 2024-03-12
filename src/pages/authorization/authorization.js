import authorizationPage from "./authorization.tmpl";
import Handlebars from 'handlebars';
import {tempProfile} from "../../consts/consts";

export default () => {
    const template = Handlebars.compile(authorizationPage);
    return template({
        login: tempProfile.login,
        password: tempProfile.password,
    });
}
