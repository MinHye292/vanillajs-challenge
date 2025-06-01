function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 최초 실행
updateClock();
// 1초마다 갱신
setInterval(updateClock, 1000);
