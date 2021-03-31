const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const maxNumber = colors.length-1;
const startBtnRef = document.querySelector('[data-action=start]');
const stopBtnRef = document.querySelector('[data-action=stop]');

let timeoutId = null;
let switchBg = false;

const startBtnClick = () => {
  if (switchBg) {
    return;
  }

  switchBg = true;
  
  timeoutId = setInterval(() => {
    const randomNum = randomIntegerFromInterval(0, maxNumber);
    document.body.style.backgroundColor = colors[randomNum];
  }, 1000);
};

const stopBtnClick = () => {
  clearInterval(timeoutId);
  switchBg = false;
};

startBtnRef.addEventListener('click', startBtnClick);
stopBtnRef.addEventListener('click', stopBtnClick);