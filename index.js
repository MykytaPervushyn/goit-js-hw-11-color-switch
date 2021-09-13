const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const body = document.querySelector('body');
const startColorSwitchBtn = document.querySelector('[data-action="start"]');
const stopColorSwitchBtn = document.querySelector('[data-action="stop"]');

startColorSwitchBtn.addEventListener('click', onStartColorSwitchBtnClick);
stopColorSwitchBtn.addEventListener('click', onStopColorSwitchBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DELAY = 1000;
let intervalId = null;

function onStartColorSwitchBtnClick() {
    startColorSwitchBtn.disabled = true;
  intervalId = setInterval(() => {
   body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}, DELAY)
}

function onStopColorSwitchBtnClick() {
  clearInterval(intervalId);
    startColorSwitchBtn.disabled = false;
}