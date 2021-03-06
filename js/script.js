var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");

var catalogBuyButton = document.querySelectorAll(".catalog-buy-btn");
var modalCloseAddCart = document.querySelector(".modal--add-cart .modal-close");
var modalButtonNextBuy = document.querySelector(".modal--add-cart .btn-next-buy");
var modalAddCart = document.querySelector(".modal--add-cart");
var headerBasket = document.querySelector(".main-header__basket");
var catalogBookmarksButton = document.querySelectorAll(".catalog-bookmarks-btn");
var headerBookmarks = document.querySelector(".main-header__bookmarks");

for(var i=0; i<catalogBuyButton.length; i++) catalogBuyButton[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddCart.classList.add("is-opened");
  body.classList.add("overlay");
  headerBasket.classList.add("main-header__basket--not-empty");
});

for(var i=0; i<catalogBookmarksButton.length; i++) catalogBookmarksButton[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  headerBookmarks.classList.add("main-header__bookmarks--not-empty");
});

modalCloseAddCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddCart.classList.remove("is-opened");
  body.classList.remove("overlay");
});

modalButtonNextBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddCart.classList.remove("is-opened");
  body.classList.remove("overlay");
});


var contactButton = document.querySelector(".contacts__btn");
var modalCloseWriteUs = document.querySelector(".modal--write-us .modal-close");
var modalWriteUs = document.querySelector(".modal--write-us");

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("is-opened");
  body.classList.add("overlay");
});

modalCloseWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("is-opened");
  body.classList.remove("overlay");
  modalWriteUs.classList.remove("modal--error");
});


var mapLittle = document.querySelector(".contacts__map-little");
var modalCloseMap = document.querySelector(".modal--map .modal-close");
var modalMap = document.querySelector(".modal--map");

mapLittle.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("is-opened");
  body.classList.add("overlay");
});

modalCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("is-opened");
  body.classList.remove("overlay");
});


var writeUsForm = document.querySelector(".write-us__form");
var writeUsInputName = modalWriteUs.querySelector("[name=name]");
var writeUsInputMail = modalWriteUs.querySelector("[name=mail]");
var writeUsInputLetter = modalWriteUs.querySelector("[name=letter]");

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsInputName.value || !writeUsInputMail.value || !writeUsInputLetter.value) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal--error");
  }
});
