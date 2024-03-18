import Handlebars from "handlebars";
import baseInput from "./baseInput.hbs";
import "./baseInput.scss";

const inputCompiled = Handlebars.compile(baseInput);

export default inputCompiled;
