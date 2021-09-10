'use strict';

const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a');
const closeIcon = document.querySelector('.close');

// opening menu

const toggleMenu = () => {
  menu.classList.toggle('menu--opened');
  document.body.classList.toggle('hidden');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

// moving sections

const toPayment = document.querySelector('#toPayment');
const toConfirmation = document.querySelector('#toConfirmation');
const sections = document.querySelector('.checkout__sections');
const section = sections.firstElementChild;

const steps = document.querySelector('.checkout__steps');

const inputs = sections.querySelectorAll('.shipping__input');

toPayment.addEventListener('click', () => {
    inputs.forEach(input => input.classList.add('shipping__is-valid'));
});

toPayment.addEventListener('click', e => {
  // e.preventDefault();

  sections.scrollTo({
    left: sections.scrollLeft + section.offsetWidth,
    behavior: 'smooth',
  });

  steps.children[0].classList.remove('active');
  steps.children[0].classList.add('completed');
  steps.children[1].classList.add('active');

  window.location.href = '#payment'
});

toConfirmation.addEventListener('click', () => {  
  sections.scrollTo({
    left: sections.scrollLeft + section.offsetWidth,
    behavior: 'smooth',
  });

  steps.children[1].classList.remove('active');
  steps.children[1].classList.add('completed');
  steps.children[2].classList.add('active');
  window.location.href = '#confirmation';
});

const moveABit = () => {
  sections.scrollTo(sections.scrollLeft, 0);
}

window.addEventListener('resize', moveABit);