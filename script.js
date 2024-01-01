// els
const elTitle = document.getElementById("title");

// vars
let intervalId = 0;

const updateTitle = (nextYear, days, hours, minutes, seconds) => {
  const day = days ? `${days} kun` : `<span class="left">0 kun</span>`;
  const hour = hours ? `${hours} soat` : `<span class="left">0 soat</span>`;
  const minute = minutes
    ? `${minutes} daqiqa`
    : `<span class="left">0 daqiqa</span>`;
  const second = `va ${seconds} soniya`;

  const str = `${nextYear}-yil kirib kelishiga ${day}, ${hour}, ${minute} ${second} qoldi`;
  elTitle.innerHTML = str;
};

const startCountdown = () => {
  const nextYear = new Date().getFullYear() + 1;
  const nextYearTime = new Date(`01.01.${nextYear}`);

  let days = 365;
  let hours = 24;
  let minutes = 60;
  let seconds = 60;

  intervalId = setInterval(() => {
    const residualTime = nextYearTime - Date.now();

    days = Math.floor(residualTime / (1000 * 60 * 60 * 24));
    hours = Math.floor((residualTime / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((residualTime / (1000 * 60)) % 60);
    seconds = Math.floor((residualTime / 1000) % 60);

    if (residualTime < 1) elTitle.textContent = `${nextYear} yil kirib keldi!`;
    else updateTitle(nextYear, days, hours, minutes, seconds);
  }, 1000);
};

startCountdown();
