import { controls } from "./elements.js";
import * as actions from './action.js';

export function registerControls() {
    controls.addEventListener('click', (evento)=> {
        let actControl = evento.target.dataset.action;
        if (typeof actions[actControl] != "function") {
            return
        }
        actions[actControl]();
    })
}