
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popupProfile = document.querySelector("#popup__profile");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let inputName = document.querySelector(".popup__field_name");
let inputAbout = document.querySelector(".popup__field_about");
const submitButton = document.querySelector(".popup__save-button");

const templateCardElements = document.querySelector("template").content;
const areaElements = document.querySelector(".elements");
const popupElement = document.querySelector("#popup__element");
let elementTitle = document.querySelector(".element__title");
let elementLink = document.querySelector(".element__link");
let inputTitle = document.querySelector(".popup__field_title");
let inputLink = document.querySelector(".popup__field_link");
const addButton = document.querySelector(".profile__add-button");
const closeButtonElement = document.querySelector(".popup__close-button-element");
const createButton = document.querySelector(".popup__make-button");

const popupImage = document.querySelector("#popup__image");
const closeButtonImage = document.querySelector(".popup__close-button-image");
let imageLink = document.querySelector(".popup__image");

let modal = document.getElementById("modal");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
]; 

function togglePopup() {
  popupProfile.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupProfile.classList.toggle("popup_opened");
}

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
submitButton.addEventListener("click", handleFormSubmit);

function togglePopupElement() {
  popupElement.classList.toggle("popup_opened");
}

function getCardElement(data) {
  const cardElement = templateCardElements.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const trashButton = cardElement.querySelector(".element__trash-button");
  const likeButton = cardElement.querySelector(".element__like-button");
  
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  trashButton.addEventListener("click", (e) => {
    removeCardElement(e)
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__like-button-active")
  });

  cardImage.addEventListener("click", () => {
    imageLink.src = data.link;
    modal.classList.add("show"); 
    document.body.style.overflow = "hidden";
    togglePopupImage();
  });

  return cardElement
}

function removeCardElement (evt) {
  evt.target.closest(".element").remove();
}

function renderInitialCards() {
  initialCards.forEach((card)=> {
    areaElements.appendChild(getCardElement(card));
  }) 
};

renderInitialCards();

addButton.addEventListener("click", togglePopupElement);
closeButtonElement.addEventListener("click", togglePopupElement);

createButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputLink.value
  };  
  areaElements.prepend(getCardElement(card));
  togglePopupElement();
});

function togglePopupImage() {
  popupImage.classList.toggle("popup_opened");
}

closeButtonImage.addEventListener("click", function() {
  modal.classList.remove("show"); 
  document.body.style.overflow = "auto";
  togglePopupImage()
})
