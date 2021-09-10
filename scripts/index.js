'use strict';

function ecoCosmetics() {

  this.elems = {
    menuIcon: document.querySelector('.header__menu-icon'),
    menu: document.querySelector('.menu'),
    menuLinks: document.querySelectorAll('a'),
    closeIcon: document.querySelector('.close'),

    carousel: document.querySelector('.carousel__elements'),
    carouselEl: document.querySelector('.carousel__element'),
    allCarouselEl: document.querySelectorAll('.carousel__element'),
    sliderLeft: document.querySelector('#sliderLeft'),
    sliderRight: document.querySelector('#sliderRight'),

    buyButton: document.querySelector('#buy'),
  };
}

ecoCosmetics.prototype = {
  toggleMenu() {
    this.elems.menu.classList.toggle('menu--opened');
    document.body.classList.toggle('hidden');
  },

  moveCarousel(e) {
    const carousel = this.elems.carousel;
    const carouselEl = this.elems.carouselEl;

    carousel.scrollTo({
      left: carousel.scrollLeft + (carouselEl.offsetWidth + 20) * +e.currentTarget.value,
      behavior: 'smooth',
    });
  },

  disableButtons() {
    const sliderLeft = this.elems.sliderLeft;
    const sliderRight = this.elems.sliderRight;
    const carousel = this.elems.carousel;

    setTimeout(() => {
      sliderLeft.disabled = !carousel.scrollLeft;
      sliderRight.disabled = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 20;
    }, 300);
  },
  
  moveABit() {
    const carousel = this.elems.carousel;

    carousel.scrollTo(carousel.scrollLeft, 0);
  },

  highlightProduct(e) {
    if (e.target.tagName !== 'UL') {
      const activeElement = e.target.tagName === 'LI'
        ? e.target
        : e.target.parentElement;
  
      this.elems.allCarouselEl.forEach(el => {
        if (el === activeElement) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });

      buyButton.disabled = false;
    }
  },
};

const mainPage = new ecoCosmetics();

mainPage.elems.menuIcon.addEventListener('click', () => mainPage.toggleMenu());
mainPage.elems.closeIcon.addEventListener('click', () => mainPage.toggleMenu());
mainPage.elems.menuLinks.forEach(link => link.addEventListener('click', () => mainPage.toggleMenu()));

mainPage.elems.carousel.addEventListener('scroll', () => mainPage.disableButtons());
window.addEventListener('resize', () => mainPage.moveABit);
mainPage.elems.sliderLeft.addEventListener('click', e => mainPage.moveCarousel(e));
mainPage.elems.sliderRight.addEventListener('click', e => mainPage.moveCarousel(e));

mainPage.elems.carousel.addEventListener('click', e => mainPage.highlightProduct(e));
mainPage.elems.buyButton.addEventListener('click', () => window.location.href = './checkout.html#shipping');