let quotes = [
  "The best preparation for today is doing your best today. ",
  "Never let your dream to go. ",
  "Do it now sometimes 'Later' becomes 'Never'. ",
  "Believe in yourself. ",
];

function randomQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector(".quote").innerText = `"${quote}"`;
}
randomQuote();

function addClock() {

  let time = new Date();
  let minute = time.getMinutes();
  let hour = time.getHours();
  let period = "";
  let session = "AM";
  let bg = "";

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  if (hour == 0) {
    hour = 12;
  }
  minute = minute < 10 ? "0" + minute : minute;
  hour = hour < 10 ? "0" + hour : hour;

  if (hour >= 5 && hour < 12 && session === "AM") {
    period = "Morning";
    bg = `url(https://www.techgrapple.com/wp-content/uploads/2016/08/Sea-side-mountain.jpg)`;
  } else if (hour >= 12 && hour < 17 && session === "PM") {
    period = "Afternoon";
    bg = `url(https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp)`;
  } else {
    period = "Evening";
    bg = `url(https://www.techgrapple.com/wp-content/uploads/2016/08/Nature-Wallpaper-Mountain-Cloud.jpg)`;
  }

  const body = document.querySelector("body");
  body.style.backgroundImage = bg;

  document.querySelector(".dayevent").innerText = `Good ${period}, Sudip.`;

  let clock = document.querySelector(".clock");
  console.log(clock);
  clock.innerText = `${hour}:${minute}`;

  document
    .querySelector(".form-group input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let focus = document.querySelector(".form-group input");
        document.querySelector(
          ".form-group"
        ).innerHTML = `<h1>${focus.value}</h1>`;
      }
    });
}

setInterval(addClock, 1000);
