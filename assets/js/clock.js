// DOM Selection
const anaSecond = document.getElementById("seconds");
const anaMinute = document.getElementById("minutes");
const anaHour = document.getElementById("hours");

// clock handler
const setClock = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  // ratio calculate
  const secondRatio = seconds / 60;
  const minuteRatio = (secondRatio + minutes) / 60;
  const hourRatio = (minuteRatio + hours) / 12;

  setRatio(anaSecond, secondRatio);
  setRatio(anaMinute, minuteRatio);
  setRatio(anaHour, hourRatio);
};

const setRatio = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

setInterval(setClock, 1000);
setClock();
