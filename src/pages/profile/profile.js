import profilePage from "./profile.tmpl";
import Handlebars from "handlebars";
import {tempProfile} from "../../consts/consts";
import userImg from "../../img/user.png";


export default () => {
    const template = Handlebars.compile(profilePage);
    return template({...tempProfile, userImg});
}
