import status from './status.js';
import { countDown } from './countDown.js';

export function toggleRunning(){
    status.isRunning = document.documentElement.classList.toggle('running');
    countDown();
}

export function stop(){
    status.isRunning = document.documentElement.classList.remove('running');
}

export function reset(){
    console.log('reset')
}

export function toggleMusic(){
    status.isMute = document.documentElement.classList.toggle('musicOn');
}