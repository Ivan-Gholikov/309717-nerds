var modalBtnOpen = document.querySelector('.contacts-btn');
var modalBtnClose = document.querySelector('.modal-write-btn-close');
var modalModalPopup = document.querySelector('.modal-write');

modalBtnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.add("modal-write-show");
});

modalBtnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.remove("modal-write-show");
});