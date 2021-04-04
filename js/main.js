window.addEventListener('DOMContentLoaded', () => {
  /*гамбургер*/
const btnHamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('nav'),
    menuItem = document.querySelectorAll('.navigation__link'),
    windowWidth = window.screen.width;

btnHamburger.onclick = openMenu;
menuItem.forEach(item => {
  item.onclick = openMenu;
});

/*открытие и закрытие меню*/
function openMenu() {
  let icon = document.querySelector('.hamburgerIcon');    
  if (windowWidth <= 992 && icon.classList.contains('open')) {  
    icon.classList.remove('open');
    menu.style.display = 'none';
  } else {
    icon.classList.add('open');
    menu.style.display = 'block';
  }
};


/*плавный скролл к сеции*/
const smoothLinks = document.querySelectorAll('.smooth-link');

for(let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function(e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
};

/*Слайдер галереи*/
let   position = 0;
const slidesToShow = 1,
      slidesToScroll = 1,
      container = document.querySelector('.galery__container'),
      track = document.querySelector('.galery__slider'),
      item = document.querySelectorAll('.galery__item'),
      btnPrev = document.querySelector('.prev'),
      btnNext = document.querySelector('.next');

      container.style.height = `${item[0].clientHeight + 19}px`;

let   itemHeight = container.clientHeight / slidesToShow,
      movePosition = slidesToScroll * itemHeight;

      


    btnNext.addEventListener('click', () => {
          position -= movePosition;

          setPosition();
          checkBtns();
      });

      btnPrev.addEventListener('click', () => {
          position += movePosition;

          setPosition();
          checkBtns();
      });

      const setPosition = () => {
        track.style.transform = `translateY(${position}px)`
      };

      const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= 
        -((item.length / currVar()) * container.clientHeight) + container.clientHeight;
      };

      checkBtns();

      function currVar() {
        if (windowWidth > 1200) {
          return 4;
        }
        else if(windowWidth <= 1200 && windowWidth > 992) {
          return 3;
        }
        else if(windowWidth <= 992 && windowWidth > 576) {
          return 2;
        }
        else if(windowWidth <= 576) {
          return 1;
        }
      };

/*Слайдер отзывов*/
const slidesToScrollRev = 1,
      slidesToShowRev = currVar()
      containerRev = document.querySelector('.reviews__container'),
      trackRev = document.querySelector('.reviews__slider'),
      itemRev = document.querySelectorAll('.reviews__item'),
      btnPrevRev = document.querySelector('.prev-rev'),
      btnNextRev = document.querySelector('.next-rev');
let   itemWidthRev = containerRev.clientWidth / slidesToShowRev,
      positionRev = 0;

      itemRev.forEach(item => {
        item.style.minWidth = `${itemWidthRev}px`;
      });

      btnNextRev.addEventListener('click', () => {
          positionRev -= itemWidthRev;

          setPositionRev();
          checkBtnsRev();
      });

      btnPrevRev.addEventListener('click', () => {
          positionRev += itemWidthRev;

          setPositionRev();
          checkBtnsRev();
      });

      const setPositionRev = () => {
        trackRev.style.transform = `translateX(${positionRev}px)`;
      };

      const checkBtnsRev = () => {
        btnPrevRev.disabled = positionRev === 0;
        btnNextRev.disabled = positionRev <= -(itemRev.length - slidesToShowRev) * itemWidthRev;
      };

      checkBtnsRev();
    });