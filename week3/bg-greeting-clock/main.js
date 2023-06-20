const container = document.querySelector("#container");
const randomNum = Math.floor(Math.random() * 100);
const colorArr = ["red", "blue", "#000", "#fff", "purple"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const dayName = days[date.getDay()];

window.onload = () => {
  document.body.style.backgroundImage = `url('https://picsum.photos/id/${randomNum}/600/600')`;
  container.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  container.innerHTML = `
    <div id="dateBox">
      <span class="year">${year} / </span>
      <span class="month">${month} / </span>
      <span class="date">${day} / </span>
      <span class="day">${dayName}</span>
    </div>
    <div id="timeBox"></div>
  `;
  getTime();
  document.querySelector("#timeBox").insertAdjacentHTML(
    "afterend",
    `
      <span class="greeting">
        G'day, Jeonggu!
      </span>
    `
  );
  setInterval(() => getTime(), 1000);
};

const getTime = () => {
  const timeBox = document.querySelector("#timeBox");
  const curHour = new Date().getHours().toString().padStart(2, "0");
  const curMin = new Date().getMinutes().toString().padStart(2, "0");
  const curSec = new Date().getSeconds().toString().padStart(2, "0");
  timeBox.innerHTML = `
      <span class="hour">${curHour} : </span>
      <span class="min=">${curMin} : </span>
      <span class="sec">${curSec}</span>
  `;
};
