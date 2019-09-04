


var popup = document.querySelector('.login-page');
var link = document.querySelector('.user-list__login');
var close = document.querySelector('.button-close')

link.addEventListener('click', function() {
  if (popup.classList.contains('login-page__closed')) {
    popup.classList.remove('login-page__closed');
    popup.classList.add('login-page__opened');
  } else {
    popup.classList.add('login-page__closed');
    popup.classList.remove('login-page__opened');
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault(evt);
    popup.classList.remove('login-page__opened');
    popup.classList.add('login-page__closed');
  });

window.addEventListener('keydown', function(evt) {
  evt.preventDefault(evt);
  if (evt.keyCode === 27) {
    if (popup.classList.contains('login-page__opened')) {
      popup.classList.remove('login-page__opened');
      popup.classList.add('login-page__closed');
    }
  }
});



