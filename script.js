// els
const elTitle = document.getElementById("title");

// vars
const nextYear = new Date().getFullYear() + 1;
const nextYearDate = new Date(`01.01.${nextYear}`);
const nextYearTime = nextYearDate.getTime();
let intervalId = 0;

const updateTitle = (days, hours, minutes, seconds) => {
  const day = days ? `${days} kun,` : "";
  const hour = hours ? `${hours} soat,` : "";
  const minute = minutes ? `${minutes} daqiqa` : "";
  const second = seconds ? `va ${seconds} soniya` : "";

  const str = `${nextYear}-yil kirib kelishiga ${day} ${hour} ${minute} ${second} qoldi`;
  elTitle.textContent = str;
};

const startCountdown = () => {
  let days = 365;
  let hours = 24;
  let minutes = 60;
  let seconds = 60;

  intervalId = setInterval(() => {
    const residualTime = nextYearDate - Date.now();

    days = Math.floor(residualTime / (1000 * 60 * 60 * 24));
    hours = Math.floor((residualTime / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((residualTime / (1000 * 60)) % 60);
    seconds = Math.floor((residualTime / 1000) % 60);

    if (residualTime < 1) {
      elTitle.textContent = "yangi yil kirib keldi!";
      clearInterval(intervalId);
    } else {
      updateTitle(days, hours, minutes, seconds);
    }
  }, 1000);
};

startCountdown();
