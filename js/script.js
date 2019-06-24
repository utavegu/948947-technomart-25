//Модал "Товар добавлен в корзину"
var catalogBuyButton = document.querySelectorAll(".catalog-buy-btn");
var modalCloseAddCart = document.querySelector(".modal--add-cart .modal-close");
var modalAddCart = document.querySelector(".modal--add-cart");

for(var i=0; i<catalogBuyButton.length; i++) catalogBuyButton[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddCart.classList.add("is-opened");
});

modalCloseAddCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddCart.classList.remove("is-opened");
});

//Модал "Напишите нам"
var contactButton = document.querySelector(".contacts__btn");
var modalCloseWriteUs = document.querySelector(".modal--write-us .modal-close");
var modalWriteUs = document.querySelector(".modal--write-us");

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("is-opened");
});

modalCloseWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("is-opened");
});

//Модал "Карта"
var mapLittle = document.querySelector(".contacts__map-little");
var modalCloseMap = document.querySelector(".modal--map .modal-close");
var modalMap = document.querySelector(".modal--map");

mapLittle.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("is-opened");
});

modalCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("is-opened");
});
