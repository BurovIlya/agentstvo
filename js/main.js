const form = document.querySelector('.form');

const formInput = form.querySelector('.form__input');

formInput.onfocus = function() {
    form.classList.add('form--active');
};

formInput.onblur = function() {
    form.classList.remove('form--active');
};

const mobileNav = document.querySelector('.mobile-nav');

const mobileNavButton = document.querySelector('.mobile-nav-button');

const mobileNavIcon = mobileNavButton.firstElementChild;

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});


