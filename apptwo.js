const parseData = (response) => response.json();

const usersUrl = "http://localhost:3000/users/";
const carsUrl = "http://localhost:3000/cars/";
const commentsUrl = "http://localhost:3000/comments/";

const carName = document.querySelector(".car-name");
const userImage = document.querySelector(".user-image");
const $carImage = document.querySelector(".car-image-container");
const userDetail = document.querySelector(".user-detail");
const carComments = document.querySelector(".car-comments");
const firstName = document.querySelector(".first-name");
const memberSince = document.querySelector(".member-since");
const carsPosted = document.querySelector(".cars-posted");
const carDetailMmy = document.querySelector(".car-detail-mmy");

fetch(usersUrl)
  .then(parseData)
  .then((userData) => {
    userImage.src = userData[0].userImage;
    firstName.textContent = userData[0].firstName;
    memberSince.textContent = userData[0].memberSince;
    carsPosted.textContent = userData[0].carsPosted;
  });

fetch(carsUrl)
  .then(parseData)
  .then((carsData) => {
    $carImage.style.backgroundImage = carsData[0].carImage;
    carName.textContent = carsData[0].carName;

    let carDetailString = `${carsData[0].carMake} ${carsData[0].carModel} ${carsData[0].carYear}`;
    carDetailMmy.textContent = carDetailString;

    console.log(carsData[0].dislikes);
    console.log(carsData[0].likes);
  });

fetch(commentsUrl)
  .then(parseData)
  .then((comments) => {
    carComments.innerHTML = "";
    comments.forEach((comment) => {
      let li = document.createElement("li");
      li.innerText = comment.content;
      carComments.append(li);
    });
  });

const turboClick = document.querySelector(".turbo");
let turboFlutter = document.querySelector("#turbo-flutter");
turboClick.addEventListener("click", () => {
  turboFlutter.play();
});

const dsClick = document.querySelector(".down-shift");
let downShift = document.querySelector("#down-shift-aud");
dsClick.addEventListener("click", () => {
  downShift.play();
});
