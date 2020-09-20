//자바스크립트의 느슨한(?)모드를 엄격하게 하기위해서 선언
//절차적으로 코딩이 이루어진 상태에만 값을 출력하게 만든다 ex) 선언보다 출력이 먼저일때 에러를 발생시킨다.
"use strict";

const timeContainer = document.querySelector(".time"),
  timeValue = timeContainer.querySelector("span");

function getTime() {
  const time = new Date();
  const hourToMinute = time.toLocaleTimeString({
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  timeValue.innerText = hourToMinute;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
