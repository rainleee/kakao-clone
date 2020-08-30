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
