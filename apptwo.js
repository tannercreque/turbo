const parseData = (response) => response.json();

const turboClick = document.querySelector(".turbo");
let turboFlutter = document.querySelector("#turbo-flutter");

const dsClick = document.querySelector(".down-shift");
let downShift = document.querySelector("#down-shift-aud");

const usersUrl = "http://localhost:3000/users/";
const carsUrl = "http://localhost:3000/cars/";
const commentsUrl = "http://localhost:3000/comments";

let i = 0;
const carName = document.querySelector(".car-name");
const userImage = document.querySelector(".user-image");
const $carImage = document.querySelector(".car-image-container");
const userDetail = document.querySelector(".user-detail");
const carComments = document.querySelector(".car-comments");
const firstName = document.querySelector(".first-name");
const memberSince = document.querySelector(".member-since");
const carsPosted = document.querySelector(".cars-posted");
const carDetailMmy = document.querySelector(".car-detail-mmy");
const commentForm = document.querySelector(".comment-form");
const $likesText = document.querySelector(".turbo-text");
const $dislikesText = document.querySelector(".ds-text");

const likesText = " Turbos";
const dislikesText = " Downshifts";

fetch(usersUrl).then(parseData).then(renderUserData);
fetch(carsUrl).then(parseData).then(handleCarResponse);
fetch(commentsUrl).then(parseData).then(renderComments);

let cars;

function handleCarResponse(carsData) {
  cars = carsData;
  renderCarData(cars[i]);
}

function renderUserData(userData) {
  userImage.src = userData[0].userImage;
  firstName.textContent = userData[0].firstName;
  memberSince.textContent = userData[0].memberSince;
  carsPosted.textContent = userData[0].carsPosted;
}

function renderCarData(car) {
  $carImage.style.backgroundImage = `url("${car.carImage}")`;
  carName.textContent = car.carName;

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const content = formData.get(`comment`);
    const li = document.createElement("li");
    li.textContent = content;
    carComments.append(li);

    let contentObject = {
      content: content,
      carsId: 1,
      userId: car.id,
    };

    postNewComment(contentObject);
  });

  let carDetailString = `${car.carMake} ${car.carModel} ${car.carYear}`;
  carDetailMmy.textContent = carDetailString;

  console.log(carsData[i].dislikes);
  console.log(carsData[i].likes);
}

turboClick.addEventListener("click", () => {
  turboFlutter.play();
  let likesCount = parseInt($likesText.textContent);
  likesCount++;
  $likesText.textContent = likesCount + likesText;
  if (i < cars.length - 1) {
    i++;
  } else {
    i = 0;
  }
  renderCarData(cars[i]);
});

function renderComments(comments) {
  console.log(comments);
  carComments.innerHTML = "";

  comments.forEach((comment) => {
    let li = document.createElement("li");
    li.innerText = comment.content;
    carComments.append(li);
  });
}

function postNewComment(newComment) {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };
  fetch(commentsUrl, options);
}

dsClick.addEventListener("click", () => {
  downShift.play();
  let dislikesCount = parseInt($dislikesText.textContent);
  dislikesCount++;
  $dislikesText.textContent = dislikesCount + dislikesText;
});
