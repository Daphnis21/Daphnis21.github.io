const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/donkey.png") {
    myImage.setAttribute("src", "images/binturong.png");
  } else {
    myImage.setAttribute("src", "images/donkey.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `It was fun being with you, ${myName}.`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `It was fun being with you, ${storedName}.`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
