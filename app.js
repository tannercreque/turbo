const usersUrl = "http://localhost:3000/users/";
const carsUrl = "http://localhost:3000/cars/";
const commentsUrl = "http://localhost:3000/comments/";
const landingForm = document.getElementById("landing-form");
const parseResponse = (response) => response.json();

//grab highest index+1 of users for car to user tie through in POST
function returnMaxIndex(maxIndex) {
  fetch(usersUrl)
    .then(parseResponse)
    .then((data) => {
      let maxIndex = ++data.length;
    });
  return maxIndex;
}

landingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newFormData = new FormData(landingForm);

  let newUser = {
    firstName: newFormData.get("fname"),
    lastName: newFormData.get("lname"),
    userImage: newFormData.get("userimg"),
  };

  postNewUser(newUser);

  let newCar = {
    carName: newFormData.get("carname"),
    carMake: newFormData.get("carmake"),
    carModel: newFormData.get("carmodel"),
    carImage: newFormData.get("carimage"),
    likes: 0,
    dislikes: 0,
  };
  console.log(newUser);
  // window.location.href = "indextwo.html";
});

function postNewUser(newUser) {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser),
  };
  fetch(usersUrl, options).then(console.log(Response()));
}

// fetch(usersUrl).then(parseResponse).then(postNewUser);
// fetch(carsUrl).then(parseResponse).then(postNewUser);

// function PostNewUser(object) {
//   console.log(object);
// }
