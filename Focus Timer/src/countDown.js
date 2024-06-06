import status from "./status.js";

export function countDown(){
    if (!status.isRunning) {
        console.log('stop');
        return
    }
    console.log('contou')
    setTimeout(()=> countDown(), 1000)
}