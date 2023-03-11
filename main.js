const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const quoteBtn = document.getElementById("quote-btn");
const quote = document.getElementById("quote");
const quoteContainer = document.getElementById("quoteContainer");

const newBeginning = "16 Jun 2023";

const countdown = function () {
  const currentDate = new Date();
  const newDate = new Date(newBeginning);

  //convert ms to sec
  const totalSeconds = (newDate - currentDate) / 1000;

  //convert sec to days
  const days = Math.floor(totalSeconds / 3600 / 24);

  //sec to hours
  const hours = Math.floor(totalSeconds / 3600) % 24;

  //sec to min
  const minutes = Math.floor(totalSeconds / 60) % 60;

  //secs remaining
  const seconds = Math.floor(totalSeconds) % 60;

  //   console.log(days, hours, minutes, seconds);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

countdown();

setInterval(countdown, 1000);

//inspirational quote generator
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "healthruwords.p.rapidapi.com",
  },
};
let i = 1;
const quoteArr = [];
const generateQuote = function (i) {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[i]);
      quoteArr.push(data[i]);
    })
    .catch((err) => console.error(err));
};
generateQuote(i);
console.log(quote);
console.log(daysEl);

daysEl.addEventListener("click", function () {
  console.log("hi");
});

console.log(quoteArr);

quoteBtn.addEventListener("click", function () {
  const i = Math.floor(Math.random() * 1000 + 1);
  generateQuote(i);

  quote.innerHTML = quoteArr[quoteArr.length - 1].text;
  // const html = `
  // <div class="quote" id="quote">${quoteArr[quoteArr.length - 1].text}</div>
  // `;

  // quoteContainer.insertAdjacentHTML("afterend", html);

  // if (quoteBtn.click) {
  //   quoteContainer.innerHTML = "";
  // }
});
