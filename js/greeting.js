const inputForm = document.querySelector(".input-form"),
  input = inputForm.querySelector("input");
greeting = document.querySelector(".greetings");

const USERNAME_KEY = "username",
  SHOWING_CLASSNAME = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const userName = input.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

function paintGreeting(userName) {
  inputForm.classList.remove(SHOWING_CLASSNAME);
  greeting.innerText = `Hello! ${userName}`;
  greeting.classList.add(SHOWING_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  inputForm.classList.add(SHOWING_CLASSNAME);
  inputForm.addEventListener("submit", handleSubmit);
} else {
  paintGreeting(savedUsername);
}
