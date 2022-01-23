const clock = document.querySelector(".clock");
const dateTitle = clock.querySelector(".date");
const timeTitle = clock.querySelector(".time");

function getClock() {
    const date = new Date();
    const years = date.getFullYear();
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    dateTitle.innerText = `${years}년 ${months}월 ${days}일`;

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    timeTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);