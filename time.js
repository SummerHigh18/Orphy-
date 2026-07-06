
function showTime() {
    let timePara = document.getElementById('time')

    timePara.textContent = new Date().toLocaleTimeString();

}

setInterval(showTime, 1000);
showTime()