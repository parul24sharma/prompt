
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
  "This can be anything you want";

if (document.body.offsetHeight < document.body.offsetWidth) {
  // document.querySelector(".mission").style.height=document.querySelector(".mission").style.width*2;
}
var missionMessages = [
  "hello I am mission 1",
  "hello I am mission 2",
  "hello I am mission 3",
];
let mission = [
  {
    imageSrc: String,
    missionMessage: String,
  },
  {
    imageSrc: String,
    missionMessage: String,
  },
  {
    imageSrc: String,
    missionMessage: String,
  },
];

// var missionImagePath = [  ]
var s = document.getElementsByClassName("mission-message");
missionMessages.forEach((e, i) => {
  s[i].innerHTML = e;
  s[i].style.color = "#fff";
});
