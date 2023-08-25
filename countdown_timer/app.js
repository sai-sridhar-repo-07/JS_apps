const newYears = "1 Jan 2024";
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function reflectChanges(new_days, new_hours, new_minutes, new_seconds) {
  days.textContent = new_days;
  hours.textContent = new_hours;
  minutes.textContent = new_minutes;
  seconds.textContent = new_seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = formatTime(Math.floor(totalSeconds / 3600 / 24));
  const hours = formatTime(Math.floor(totalSeconds / 3600) % 24);
  const minutes = formatTime(Math.floor(totalSeconds / 60) % 60);
  const seconds = formatTime(Math.floor(totalSeconds % 60));
  reflectChanges(days, hours, minutes, seconds);

  //   console.log(days, hours, minutes, seconds);
}

// countDown();

setInterval(countDown, 1000);
