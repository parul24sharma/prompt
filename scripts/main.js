/** Navbar Toggle for mobile phone */
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $(".navbar").toggleClass("active");
  });

  $(".navbar ul li a").hover(function () {
    $(".icon").toggleClass("color");
  });
});

/** main attributes */
document.querySelector(".bgimage").style.backgroundImage =
  "url(./images/bg2.jpg)";
document.querySelector(".head-text").innerHTML =
  "Welcome! to the Wikipedia ✌ of BVoc";

/** Mission Section  */
let missionObject = [
  {
    imageSrc: "./images/light-bulb.gif",
    imageAlt: "Book Gif",
    missionMessage:
      "Know Everything about Bachelor of Vocation undergraduate course",
  },
  {
    imageSrc: "./images/book.gif",
    imageAlt: "Light Gif",
    missionMessage:
      "Get all the previous year Question Papers and resources for the coursework",
  },
  {
    imageSrc: "./images/badge.gif",
    imageAlt: "Badge Gif",
    missionMessage: "Learn from Success Stories and Feedbacks from Seniors",
  },
];

missionObject.map((element, i) => {
  let missionElement = document.createElement("div");
  missionElement.setAttribute("class", "mission");
  missionElement.innerHTML = `<img class="mission-image" />
  <span class="mission-message"></span>`;
  document.querySelector(".mission-container").appendChild(missionElement);

  document.querySelectorAll(".mission > img")[i].src = element.imageSrc;
  document.querySelectorAll(".mission > img")[i].alt = element.imageAlt;
  document.querySelectorAll(".mission > .mission-message")[i].innerHTML =
    element.missionMessage;
});

let question = [
  {
    year : 2018,
    nameOfPaper : "Management of Information System"
  },
  {
    year : 2017,
    nameOfPaper : "Computer Fundamentals"
  },
  {
    year : 2015,
    nameOfPaper : "Communication Competency"
  },
  {
    year : 2016,
    nameOfPaper : "Computer Application in Communication and Media Design"
  }
];
