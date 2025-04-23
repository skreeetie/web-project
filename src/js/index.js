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
let pageMain = document.querySelector('.page-main');
let headerInit = false;

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