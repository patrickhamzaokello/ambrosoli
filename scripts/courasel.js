// start of company proile
let profilePosition = 1;
const companyprofile = document.getElementsByClassName("agencydetails");

const histbtn = document.getElementById("History--btn");
const missionbtn = document.getElementById("Mission--btn");
const visionbtn = document.getElementById("Vision--btn");
const corebtn = document.getElementById("Core--btn");

const totalprofilestats = companyprofile.length;

histbtn.addEventListener("click", function () {
  console.log("hhistor btn");
  const i = 0;
  changeprofilediv(i);
  histbtn.classList.add("active");
  missionbtn.classList.remove("active");
  visionbtn.classList.remove("active");
  corebtn.classList.remove("active");
});

missionbtn.addEventListener("click", function () {
  console.log("mission btn");
  const i = 1;
  changeprofilediv(i);
  histbtn.classList.remove("active");
  missionbtn.classList.add("active");
  visionbtn.classList.remove("active");
  corebtn.classList.remove("active");
});

visionbtn.addEventListener("click", function () {
  console.log("vision btn");
  const i = 2;
  changeprofilediv(i);
  histbtn.classList.remove("active");
  missionbtn.classList.remove("active");
  visionbtn.classList.add("active");
  corebtn.classList.remove("active");
});

corebtn.addEventListener("click", function () {
  console.log("core btn");
  const i = 3;
  changeprofilediv(i);
  histbtn.classList.remove("active");
  missionbtn.classList.remove("active");
  visionbtn.classList.remove("active");
  corebtn.classList.add("active");
});

function changeprofilediv(i) {
  for (let slide of companyprofile) {
    slide.classList.remove("agencycontent--visible");
    slide.classList.add("agencycontent--hidden");
  }
  companyprofile[i].classList.add("agencycontent--visible");
}

// end company profile edit

// start of heropage slider

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

setInterval(moveToNextSlide, 20000);

// end of hero slide

// start of featured slider

let slideFeatureposition = 0;
const featureslides = document.getElementsByClassName("workcollection");
const totalfeaturedslides = featureslides.length;

document
  .getElementById("featured__button--next")
  .addEventListener("click", function () {
    featureMovenext();
  });

document
  .getElementById("featured__button--prev")
  .addEventListener("click", function () {
    featureMoveprev();
  });

function updateFeatureSlidePosition() {
  for (let slide of featureslides) {
    slide.classList.remove("workcollection--visible");
    slide.classList.add("workcollection--hidden");
  }

  featureslides[slideFeatureposition].classList.add("workcollection--visible");
}

function featureMovenext() {
  if (slideFeatureposition == totalfeaturedslides - 1) {
    slideFeatureposition = 0;
  } else {
    slideFeatureposition++;
  }
  updateFeatureSlidePosition();
}

function featureMoveprev() {
  if (slideFeatureposition == 0) {
    slideFeatureposition = totalfeaturedslides - 1;
  } else {
    slideFeatureposition--;
  }
  updateFeatureSlidePosition();
}

// setInterval(featureMovenext, 5000);

// end of featured slide

// start of Team  slider

let teamcarasoulposition = 0;
const teamslides = document.getElementsByClassName("teamcollectiondiv");
const totalTeamSlides = teamslides.length;

document
  .getElementById("teamactions--next")
  .addEventListener("click", function () {
    teamMovenext();
  });

document
  .getElementById("teamactions--prev")
  .addEventListener("click", function () {
    teamMovePrev();
  });

function updateTeamSlidePosition() {
  for (let slide of teamslides) {
    slide.classList.remove("teamcollectiondiv--visible");
    slide.classList.add("teamcollectiondiv--hidden");
  }

  teamslides[teamcarasoulposition].classList.add("teamcollectiondiv--visible");
}

function teamMovenext() {
  if (teamcarasoulposition == totalTeamSlides - 1) {
    teamcarasoulposition = 0;
  } else {
    teamcarasoulposition++;
  }
  updateTeamSlidePosition();
}

function teamMovePrev() {
  if (teamcarasoulposition == 0) {
    teamcarasoulposition = totalTeamSlides - 1;
  } else {
    teamcarasoulposition--;
  }
  updateTeamSlidePosition();
}

// setInterval(featureMovenext, 5000);

// end of featured slide
