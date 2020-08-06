
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $(".navbar").toggleClass("active");
  });

  $(".navbar ul li a").hover(function () {
    $(".icon").toggleClass("color");
  });
});

document.body.style.background = backgroundColor;
document.querySelector(".bgimage").style.backgroundImage =
  backgroundImage;
document.querySelector(".head-text").innerHTML =
  "Welcome! to the Wikipedia ✌ of BVoc";

let mission = [
  {
    imageSrc: "./images/light-bulb.gif",
    imageAlt: "Book Gif",
    missionMessage: "Know Everything about Bachelor of Vocation undergraduate course",
  },
  {
    imageSrc: "./images/book.gif",
    imageAlt: "Light Gif",
    missionMessage: "Get all the previous year Question Papers and resources for the coursework",
  },
  {
    imageSrc: "./images/badge.gif",
    imageAlt: "Badge Gif",
    missionMessage: "Learn from Success Stories and Feedbacks from Seniors",
  },
];

mission.map((element,i)=>{
  document.querySelectorAll(".mission > img")[i].src = element.imageSrc;
  document.querySelectorAll(".mission > img")[i].alt = element.imageAlt;
  document.querySelectorAll(".mission > .mission-message")[i].innerHTML = element.missionMessage;
})
