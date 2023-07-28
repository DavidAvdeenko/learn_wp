import './index.html';
import './index.scss';
import './img/blitz_card.png';
import './img/bread.jpg'
import './img/circle-chevron-up-solid.svg'
import './img/courses.svg'
import './img/css3.svg'
import './img/design.svg'
import './img/designer.svg'
import './img/developer.svg'
import './img/facebook.svg'
import './img/github.svg'
import './img/gold_blitz.png'
import './img/html5.svg'
import './img/instagram.svg'
import './img/ipad.jpg'
import './img/jquery.svg'
import './img/js.svg'
import './img/mac.jpg'
import './img/main_bg.jpg'
import './img/main_bg.png'
import './img/main_photo.jpg'
import './img/mobile_dev.svg'
import './img/nft.png'
import './img/node.js.svg'
import './img/plans.jpg'
import './img/pulse.jpg'
import './img/react.svg'
import './img/telegram.svg'
import './img/uber.jpg'
import './img/university.svg'
import './img/vue.png'
import './img/web_development.svg'


const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   itemClose = document.querySelector('.menu__list');


hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

itemClose.addEventListener('click', () => {
   menu.classList.remove('active');
});
closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
   lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});

$(window).scroll(function () {
   if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
   } else {
      $('.pageup').fadeOut();
   }

});