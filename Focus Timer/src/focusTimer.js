import status from './status.js';
import { registerControls } from './events.js';
import { timer } from './timer.js';

export function start(minutes, seconds) {
    status.minute = minutes;
    status.second = seconds;

    console.log(status);
    registerControls();
    timer(1, 10);

}