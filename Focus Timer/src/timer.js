import * as status from './status.js';
import * as el from './elements.js';

export function timer(minutes, seconds){
    minutes = minutes ?? status.minute;
    seconds = seconds ?? status.second;

    el.counterMinute.textContent = String(minutes).padStart(2, '0');
    el.counterSecond.textContent = String(seconds).padStart(2, '0');
}