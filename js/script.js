var link = document.querySelector(".feedback-form-open");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form-close");
var username = document.querySelector("[name=username]");
var email = document.querySelector("[name=email]");
var feedback = document.querySelector("[name=feedback]");
var storage_username = localStorage.getItem("username");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-form-show");
  if (storage_username) {
    username.value = storage_username;
    if (storage_email) {
      email.value = storage_email;
      feedback.focus();
    } else {
      email.focus();
    }
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-form-show");
  popup.classList.remove("feedback-error");
});

popup.addEventListener("submit", function(event) {
  if(!username.value || !email.value || !feedback.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-form-show")) {
        popup.classList.remove("feedback-form-show");
        popup.classList.remove("feedback-error");
    }
  }
});
