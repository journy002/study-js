let clockTarget = document.getElementById('clock');

function clock(){

    let date = new Date();

    let month = date.getMonth();

    let clockDate = date.getDate();

    let day = date.getDay();

    let week = ['일','월','화','수','목','금','토'];

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();


    clockTarget.innerText = `${month + 1}월 ${clockDate}일 ${week[day]}` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

}

function init(){

    clock(); // clock function을 처음에 불러오지 않으면 1초후에 setInterval 기능이 작동된다.

    setInterval(clock, 1000);
}

init();