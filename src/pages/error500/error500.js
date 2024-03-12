import error500Page from "./error500.tmpl";
import Handlebars from "handlebars";

export default () => {
    const template = Handlebars.compile(error500Page);
    return template({});
}
