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

let reapirIconFloat = document.querySelector('#repair-icon-float');

reapirIconFloat.addEventListener('click', function() {
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

document.addEventListener('click', function(event) {
  if (tabletFeedbackInit && !tabletFeedbackModal.contains(event.target) && !repairIcon.contains(event.target) && !reapirIconFloat.contains(event.target)) {
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

let tabletCallModal = document.querySelector('.page-header__order-call-wrapper');
let tabletCallClose = tabletCallModal.querySelector('.page-header__order-call--close');
let tabletCallInit = false;

searchButton.addEventListener('click', function() {
  if (!tabletCallInit && !headerInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletCallInit = true;
      }
    } else {
      if (window.innerWidth >= 800) {
        tabletCallModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletCallInit = true;
      }
    }
  }
})

let searchButtonFloat = document.querySelector('#search-icon-float');

searchButtonFloat.addEventListener('click', function() {
  if (!tabletCallInit && !headerInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletCallInit = true;
      }
    } else {
      if (window.innerWidth >= 800) {
        tabletCallModal.classList.remove('--hidden');
        pageHeader.style.opacity = '0.04';
        pageMain.style.opacity = '0.04';
        pageFooter.style.opacity = '0.04';
        tabletCallInit = true;
      }
    }
  }
})

tabletCallClose.addEventListener('click', function() {
  if (tabletCallInit) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletCallInit = false;
      }
    } else {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletCallInit = false;
      }
    }
  }
})

document.addEventListener('click', function(event) {
  if (tabletCallInit && !tabletCallModal.contains(event.target) && !searchButton.contains(event.target) && !searchButtonFloat.contains(event.target)) {
    if (swiperStyles.display === 'none') {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletCallInit = false;
      }
    } else {
      if (window.innerWidth >= 768) {
        tabletCallModal.classList.add('--hidden');
        pageHeader.style.opacity = '1';
        pageMain.style.opacity = '1';
        pageFooter.style.opacity = '1';
        tabletCallInit = false;
      }
    }
  }
})

let readMoreDisplay768 = document.querySelector('.--display--768--text');
let readMoreDisplay1440 = document.querySelector('.--display--1440--text');
let readMoreDisplayText = document.querySelector('.--display--text');
let readMoreButton = document.querySelector('.readmore');
let readMoreHightlight = readMoreButton.querySelector('.readmore__highlight');
let readMoreText = readMoreButton.querySelector('.readmore__text');
let readMoreInit = false;

readMoreButton.addEventListener('click', function() {
  if (!readMoreInit) {
    readMoreDisplay768.classList.remove('--display--768--text');
    readMoreDisplay768.classList.add('b-content--gap');
    readMoreDisplay1440.classList.remove('--display--1440--text');
    readMoreDisplayText.classList.remove('--display--text');
    readMoreHightlight.classList.add('readmore__highlight--rotated');
    readMoreText.textContent = 'Скрыть';
    readMoreInit = true;
  } else {
    readMoreDisplay768.classList.add('--display--768--text');
    readMoreDisplay768.classList.remove('b-content--gap');
    readMoreDisplay1440.classList.add('--display--1440--text');
    readMoreDisplayText.classList.add('--display--text');
    readMoreHightlight.classList.remove('readmore__highlight--rotated');
    readMoreText.textContent = 'Читать далее';
    readMoreInit = false;
  }
})

let companiesSection = document.querySelector('#companies-section');
let companiesHidden = companiesSection.querySelectorAll('.--hidden');
let companiesMoreButton = companiesSection.querySelector('#company-card--show');
let companiesMoreHighlight = companiesMoreButton.querySelector('.readmore__highlight');
let companiesMoreText = companiesMoreButton.querySelector('.readmore__text');
let companiesInit = false;

companiesMoreButton.addEventListener('click', function() {
  if (!companiesInit) {
    companiesMoreHighlight.classList.add('readmore__highlight--rotated');
    companiesMoreText.textContent = 'Скрыть';
    for (let i = 0; i < companiesHidden.length; i++) {
      companiesHidden[i].classList.remove('--hidden');
    }
    companiesInit = true;
  } else {
    companiesMoreHighlight.classList.remove('readmore__highlight--rotated');
    companiesMoreText.textContent = 'Показать все';
    for (let i = 0; i < companiesHidden.length; i++) {
      companiesHidden[i].classList.add('--hidden');
    }
    companiesInit = false;
  }
})

let mediasSection = document.querySelector('#medias-section');
let mediasHidden = mediasSection.querySelectorAll('.--hidden');
let mediasMoreButton = mediasSection.querySelector('#media-card--show');
let mediasMoreHighlight = mediasMoreButton.querySelector('.readmore__highlight');
let mediasMoreText = mediasMoreButton.querySelector('.readmore__text');
let mediasInit = false;

mediasMoreButton.addEventListener('click', function() {
  if (!mediasInit) {
    mediasMoreHighlight.classList.add('readmore__highlight--rotated');
    mediasMoreText.textContent = 'Скрыть';
    for (let i = 0; i < mediasHidden.length; i++) {
      mediasHidden[i].classList.remove('--hidden');
    }
    mediasInit = true;
  } else {
    mediasMoreHighlight.classList.remove('readmore__highlight--rotated');
    mediasMoreText.textContent = 'Показать все';
    for (let i = 0; i < mediasHidden.length; i++) {
      mediasHidden[i].classList.add('--hidden');
    }
    mediasInit = false;
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