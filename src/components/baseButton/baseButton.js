import Handlebars from "handlebars";
import baseButton from "./baseButton.hbs";
import "./baseButton.scss";

const compiledButton = Handlebars.compile(baseButton);

export default compiledButton;
