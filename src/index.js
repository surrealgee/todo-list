import Model from "./model";
import View from "./view";
import Controller from "./controller";
import "./style.css";

const app = new Controller(new Model(), new View());
