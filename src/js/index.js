import '../scss/style.scss';

let pageHeader = document.querySelector('.page-header');
let topWrapper = document.querySelector('.page-header__top-wrapper');
let headerSidebar = pageHeader.querySelector('.page-header__sidebar');
let burgerButton = document.querySelector('#burger-icon');
let burgerIcon = burgerButton.querySelector('.burger-icon');
let repairIcon = document.querySelector('#repair-icon');
let searchButton = document.querySelector('#search-icon');
let searchIcon = searchButton.querySelector('.search-icon');
let headerDivider = topWrapper.querySelector('.page-header__divider');
let feedbackModal = pageHeader.querySelector('.page-header__feedback');
let callModal = pageHeader.querySelector('.page-header__order-call');
let chatButton = headerSidebar.querySelector('#chat-icon');
let callButton = headerSidebar.querySelector('#call-icon');
let feedbackClose = feedbackModal.querySelector('.page-header__button');
let callClose = callModal.querySelector('.page-header__button');
let pageMain = document.querySelector('.page-main');
let headerInit = false;
let feedbackInit = false;
let callInit = false;

burgerButton.addEventListener('click', function() {
  if (!headerInit) {
    headerSidebar.classList.remove('--hidden');
    pageHeader.style.height = '100%';
    pageMain.classList.add('--hidden');
    topWrapper.style.justifyContent = 'space-between';
    burgerIcon.src = './img/close-icon.svg';
    burgerIcon.width = '18';
    burgerIcon.height = '18';
    headerDivider.classList.add('--hidden');
    repairIcon.classList.add('--hidden');
    searchIcon.src = './img/menu-search-icon.svg';
    searchIcon.width = '18';
    searchIcon.height = '18';
    headerInit = true;
    chatButton.addEventListener('click', function () {
      if (!feedbackInit) {
        topWrapper.classList.add('--hidden');
        headerSidebar.classList.add('--hidden');
        feedbackModal.classList.remove('--hidden');
        feedbackInit = true;
      }
    })
    feedbackClose.addEventListener('click', function() {
      topWrapper.classList.remove('--hidden');
      headerSidebar.classList.remove('--hidden');
      feedbackModal.classList.add('--hidden');
      feedbackInit = false;
    })
    callButton.addEventListener('click', function() {
      if (!callInit) {
        topWrapper.classList.add('--hidden');
        headerSidebar.classList.add('--hidden');
        callModal.classList.remove('--hidden');
        callInit = true;
      }
    })
    callClose.addEventListener('click', function() {
      topWrapper.classList.remove('--hidden');
      headerSidebar.classList.remove('--hidden');
      callModal.classList.add('--hidden');
      callInit = false;
    })
  } else {
    headerSidebar.classList.add('--hidden');
    pageHeader.style.height = 'auto';
    pageMain.classList.remove('--hidden');
    topWrapper.style.justifyContent = 'flex-start';
    burgerIcon.src = './img/burger-icon.svg';
    burgerIcon.width = '18';
    burgerIcon.height = '16';
    headerDivider.classList.remove('--hidden');
    repairIcon.classList.remove('--hidden');
    searchIcon.src = './img/search-icon.svg';
    searchIcon.width = '16';
    searchIcon.height = '20';
    headerInit = false;
  }
})

var swiperInit = false;
var swiper;

function swiperCard() {
  if (window.innerWidth < 800) {
    if (!swiperInit) {
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        spaceBetween: 16,
        slidesPerView: 'auto',
      });
      swiperInit = true;
    }
  } else if (swiperInit) {
    swiper.destroy();
    swiperInit = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);