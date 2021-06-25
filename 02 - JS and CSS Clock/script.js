const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const degreePerSecond = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${degreePerSecond}deg)`;

  const minutes = now.getMinutes();
  const degreePerMinute = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${degreePerMinute}deg)`;

  const hours = now.getHours();
  const degreePerHour = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${degreePerHour}deg)`;
}

setInterval(setTime, 1000);
