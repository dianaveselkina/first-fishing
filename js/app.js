const start = document.querySelector('#start');
let text = document.getElementById('text');
let timerShow = document.getElementById('timer');
const fishs = document.querySelectorAll('.fish');

start.addEventListener('click', function () {
  fishs.forEach((el) => {
    el.classList.toggle('fish-active');
  });

  timeMinut = 11;
  hideBtn();
});

timer = setInterval(function () {
  seconds = timeMinut % 60;

  if (timeMinut <= 0) {
    timerShow.innerHTML = 'Время вышло...';
    clearInterval(timer);
  } else {
    let strTimer = `${0}:${seconds}`;
    timerShow.innerHTML = strTimer;
  }
  --timeMinut;
}, 1000);

function hideBtn() {
  start.hidden = true;
}

for (let fish of fishs) {
  fish.addEventListener('click', function () {
    this.classList.add('displayd');
  });
}

for (let fish of fishs) {
  count = 0;
  fish.onclick = function () {
    count += 1;
    text.innerHTML = 'Ваш улов: ' + count + ' шт.';
  };
}

for (let fish of fishs) {
  setTimeout(function () {
    fish.style.display = 'none';
  }, 13000);
}
