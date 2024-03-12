import error404Page from "./error404.tmpl";
import Handlebars from "handlebars";

export default () => {
    const template = Handlebars.compile(error404Page);
    return template({});
}
