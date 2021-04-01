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

const colorsLength = colors.length-1;
const startBtnRef = document.querySelector('[data-action=start]');
const stopBtnRef = document.querySelector('[data-action=stop]');

let timeoutId = null;
let switchBg = false;

function switchColor() {
  const randomNum = randomIntegerFromInterval(0, colorsLength);
  document.body.style.backgroundColor = colors[randomNum];
};

function startBtnClick() {
  if (switchBg) {
    return;
  };
  switchBg = true;
  timeoutId = setInterval(switchColor, 1000);
};

function stopBtnClick() {
  clearInterval(timeoutId);
  switchBg = false;
};

startBtnRef.addEventListener('click', startBtnClick);
stopBtnRef.addEventListener('click', stopBtnClick);