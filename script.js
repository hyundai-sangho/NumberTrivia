let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");
let container = document.querySelector(".container");
let fact = document.querySelector(".fact");
let num = document.getElementById("num");
let url = "http://numbersapi.com/";

let fetchFact = async (num) => {
  let finalUrl = url + num;
  await fetch(finalUrl)
    .then((response) => response.text())
    .then((data) => {
      fact.style.display = "block";
      fact.innerHTML = `
        <h2>${num}</h2>
        <p>${data}</p>
        `;
      container.append(fact);
    });
};

let getFact = () => {
  let numberValue = num.value;

  // Check if input number is not empty
  // If not empty
  if (numberValue) {
    // Check if number lies between 0 and 300
    // if Yes
    if (numberValue >= 0 && numberValue <= 300) {
      fetchFact(numberValue);
    }
    // If number is less than 0 or greater than 300 display error message.
    else {
      fact.style.display = "block";
      fact.innerHTML = `
      <p class="msg"> Please enter a number between 0 to 300.</p>
      `;
    }
  }
  // If input number is empty display error message
  else {
    fact.style.display = "block";
    fact.innerHTML = `
    <p class="msg">The input field cannot be empty</p>
    `;
  }
};

let getRandomFact = () => {
  // Random number between 0 and 300
  let randomNumber = Math.floor(Math.random() * 301);
  fetchFact(randomNumber);
};

window.addEventListener("load", getRandomFact);
ranFactBtn.addEventListener("click", getRandomFact);

getFactBtn.addEventListener("click", getFact);
num.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    getFact();
  }
});
