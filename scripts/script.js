
const editButton = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
let inputName = document.querySelector(".popup__field_name");
let inputAbout = document.querySelector(".popup__field_about");
const submitButton = document.querySelector(".popup__save-button");

const clickMegusta = document.querySelector(".element__like-button");

function togglePopup() {
  popup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.toggle("popup_opened");
}

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
submitButton.addEventListener("click", handleFormSubmit);