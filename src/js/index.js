import '../scss/style.scss';

let pageHeader = document.querySelector('.page-header');
let topWrapper = document.querySelector('.page-header__top-wrapper');
let rightWrapper = topWrapper.querySelector('.page-header__right-wrapper');
let headerSidebar = pageHeader.querySelector('.page-header__sidebar');
let burgerButton = document.querySelector('#burger-icon');
let burgerIcon = burgerButton.querySelector('.burger-icon');
let repairIcon = document.querySelector('#repair-icon');
let searchButton = document.querySelector('#search-icon');
let searchIcon = searchButton.querySelector('.search-icon');
let headerDivider = topWrapper.querySelector('.page-header__divider');
let rightWrapperDivider = rightWrapper.querySelector('.page-header__divider');
let callHeaderButton = rightWrapper.querySelector('#call-header-icon');
let chatHeaderButton = rightWrapper.querySelector('#chat-header-icon');
let profileHeaderButton = rightWrapper.querySelector('#profile-header-icon');
let feedbackModal = pageHeader.querySelector('.page-header__feedback');
let callModal = pageHeader.querySelector('.page-header__order-call');
let chatButton = headerSidebar.querySelector('#chat-icon');
let callButton = headerSidebar.querySelector('#call-icon');
let feedbackClose = feedbackModal.querySelector('.page-header__button');
let callClose = callModal.querySelector('.page-header__button');
let pageMain = document.querySelector('.page-main');
let pageFooter = document.querySelector('.page-footer');
let headerInit = false;
let feedbackInit = false;
let callInit = false;
let swiperElement = document.querySelector('.swiper');
let swiperStyles = window.getComputedStyle(swiperElement);

burgerButton.addEventListener('click', function() {
  if (!headerInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        pageHeader.classList.add('menu-shadow');
        pageHeader.style.width = '320px';
        pageHeader.style.position = 'fixed';
        pageHeader.style.zIndex = '99';
        pageHeader.style.top = '0';
        pageHeader.style.left = '0';
      }
    }
    headerSidebar.classList.remove('--hidden');
    pageHeader.style.height = '100%';
    if (swiperStyles.display === 'none') {
      if (window.innerWidth < 768) {
        pageMain.classList.add('--hidden');
        pageFooter.classList.add('--hidden');
      } else {
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
      }
    } else {
      if (window.innerWidth < 800) {
        pageMain.classList.add('--hidden');
        pageFooter.classList.add('--hidden');
      } else {
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
      }
    }
    if (swiperStyles.display === 'none') {
      if (window.innerWidth < 768) {
        topWrapper.classList.add('justify--space');
      }
    } else {
      if (window.innerWidth < 800) {
        topWrapper.classList.add('justify--space');
      }
    }
    burgerIcon.src = './img/close-icon.svg';
    burgerIcon.width = '18';
    burgerIcon.height = '18';
    headerDivider.classList.add('--hidden');
    repairIcon.classList.add('--hidden');
    rightWrapperDivider.classList.add('--hidden');
    callHeaderButton.classList.add('--hidden');
    chatHeaderButton.classList.add('--hidden');
    profileHeaderButton.classList.add('--hidden');
    searchIcon.src = './img/menu-search-icon.svg';
    searchIcon.width = '18';
    searchIcon.height = '18';
    headerInit = true;
    chatButton.addEventListener('click', function () {
      if (swiperStyles.display === 'none') {
        if (window.innerWidth < 768) {
          if (!feedbackInit) {
            topWrapper.classList.add('--hidden');
            headerSidebar.classList.add('--hidden');
            feedbackModal.classList.remove('--hidden');
            feedbackInit = true;
          }
        }
      } else {
        if (window.innerWidth < 800) {
          if (!feedbackInit) {
            topWrapper.classList.add('--hidden');
            headerSidebar.classList.add('--hidden');
            feedbackModal.classList.remove('--hidden');
            feedbackInit = true;
          }
        }
      }
    })
    feedbackClose.addEventListener('click', function() {
      topWrapper.classList.remove('--hidden');
      headerSidebar.classList.remove('--hidden');
      feedbackModal.classList.add('--hidden');
      feedbackInit = false;
    })
    callButton.addEventListener('click', function() {
      if (swiperStyles.display === 'none') {
        if (window.innerWidth < 768) {
          if (!callInit) {
            topWrapper.classList.add('--hidden');
            headerSidebar.classList.add('--hidden');
            callModal.classList.remove('--hidden');
            callInit = true;
          }
        }
      } else {
        if (window.innerWidth < 800) {
          if (!callInit) {
            topWrapper.classList.add('--hidden');
            headerSidebar.classList.add('--hidden');
            callModal.classList.remove('--hidden');
            callInit = true;
          }
        }
      }
    })
    callClose.addEventListener('click', function() {
      topWrapper.classList.remove('--hidden');
      headerSidebar.classList.remove('--hidden');
      callModal.classList.add('--hidden');
      callInit = false;
    })
  } else {
    pageHeader.style.width = '100%';
    pageHeader.style.position = 'static';
    pageHeader.classList.remove('menu-shadow');
    headerSidebar.classList.add('--hidden');
    pageHeader.style.height = 'auto';
    pageMain.classList.remove('--hidden');
    pageMain.style.opacity = '1';
    pageFooter.style.opacity = '1';
    pageFooter.classList.remove('--hidden');
    topWrapper.classList.remove('justify--space');
    burgerIcon.src = './img/burger-icon.svg';
    burgerIcon.width = '18';
    burgerIcon.height = '16';
    headerDivider.classList.remove('--hidden');
    repairIcon.classList.remove('--hidden');
    rightWrapperDivider.classList.remove('--hidden');
    callHeaderButton.classList.remove('--hidden');
    chatHeaderButton.classList.remove('--hidden');
    profileHeaderButton.classList.remove('--hidden');
    searchIcon.src = './img/search-icon.svg';
    searchIcon.width = '16';
    searchIcon.height = '20';
    headerInit = false;
  }
})

document.addEventListener('click', function(event) {
  if (headerInit && !pageHeader.contains(event.target)) {
    pageHeader.style.width = '100%';
    pageHeader.style.position = 'static';
    pageHeader.classList.remove('menu-shadow');
    headerSidebar.classList.add('--hidden');
    pageHeader.style.height = 'auto';
    pageMain.classList.remove('--hidden');
    pageMain.style.opacity = '1';
    pageFooter.style.opacity = '1';
    pageFooter.classList.remove('--hidden');
    topWrapper.classList.remove('justify--space');
    burgerIcon.src = './img/burger-icon.svg';
    burgerIcon.width = '18';
    burgerIcon.height = '16';
    headerDivider.classList.remove('--hidden');
    repairIcon.classList.remove('--hidden');
    rightWrapperDivider.classList.remove('--hidden');
    callHeaderButton.classList.remove('--hidden');
    chatHeaderButton.classList.remove('--hidden');
    profileHeaderButton.classList.remove('--hidden');
    searchIcon.src = './img/search-icon.svg';
    searchIcon.width = '16';
    searchIcon.height = '20';
    headerInit = false;
  }
})

let tabletFeedbackModal = document.querySelector('.page-header__feedback-wrapper');
let tabletFeedbackClose = tabletFeedbackModal.querySelector('.page-header__feedback--close');
let tabletFeedbackInit = false;

repairIcon.addEventListener('click', function() {
  if (!tabletFeedbackInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletFeedbackModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletFeedbackInit = true;
      }
    } else {
      if (window.innerWidth >= 800) {
        tabletFeedbackModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletFeedbackInit = true;
      }
    }
  }
})

tabletFeedbackClose.addEventListener('click', function() {
  if (tabletFeedbackInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletFeedbackModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletFeedbackInit = false;
      }
    } else {
      if (window.innerWidth >= 768) {
        tabletFeedbackModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletFeedbackInit = false;
      }
    }
  }
})

let readMoreDisplay768 = document.querySelector('.--display--768--text');
let readMoreDisplay1440 = document.querySelector('.--display--1440--text');
let readMoreButton = document.querySelector('.readmore');
let readMoreHightlight = readMoreButton.querySelector('.readmore__highlight');
let readMoreText = readMoreButton.querySelector('.readmore__text');
let readMoreInit = false;

readMoreButton.addEventListener('click', function() {
  if (!readMoreInit) {
    readMoreDisplay768.classList.remove('--display--768--text');
    readMoreDisplay1440.classList.remove('--display--1440--text');
    readMoreHightlight.classList.add('readmore__highlight--rotated');
    readMoreText.textContent = 'Скрыть';
    readMoreInit = true;
  } else {
    readMoreDisplay768.classList.add('--display--768--text');
    readMoreDisplay1440.classList.add('--display--1440--text');
    readMoreHightlight.classList.remove('readmore__highlight--rotated');
    readMoreText.textContent = 'Читать далее';
    readMoreInit = false;
  }
})

var swiperInit = false;
var swiper1;
var swiper2;
var swiper3;

function swiperCard() {
  if (window.innerWidth < 800) {
    if (!swiperInit) {
      swiper1 = new Swiper('.swiper-1', {
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        spaceBetween: 16,
        slidesPerView: 'auto',
      });

      swiper2 = new Swiper('.swiper-2', {
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        spaceBetween: 16,
        slidesPerView: 'auto',
      });

      swiper3 = new Swiper('.swiper-3', {
        direction: 'horizontal',
        loop: true,

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
    swiper1.destroy();
    swiper2.destroy();
    swiper3.destroy();
    swiperInit = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);