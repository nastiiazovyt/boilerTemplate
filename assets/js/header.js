/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/js/pages/header.js ***!
  \********************************/
var headerScale = function headerScale() {
  var container = document.querySelector('.header-container');
  var threshold = 100;
  window.scrollY > threshold ? container.classList.add('header-container-scaled') : container.classList.remove('header-container-scaled');
};

window.addEventListener('scroll', headerScale);

var headerOpacity = function headerOpacity() {
  var header = document.querySelector('header');
  header.classList.remove('onload');
};

window.addEventListener('load', headerOpacity);
var buttonHeader = document.querySelector('.header-container .subtitle-button');
var svg1 = document.querySelector('.header-container .subtitle-svg-1');
var svg2 = document.querySelector('.header-container .subtitle-svg-2');

var arrowOnHoverHeader = function arrowOnHoverHeader() {
  svg1.classList.add('svg-hover1');
  svg2.classList.add('svg-hover2');
  svg1.classList.remove('svg-not-hover1');
  svg2.classList.remove('svg-not-hover2');
};

buttonHeader.addEventListener('mouseover', arrowOnHoverHeader);

var arrowOutHoverHeader = function arrowOutHoverHeader() {
  svg1.classList.remove('svg-hover1');
  svg2.classList.remove('svg-hover2');
  svg1.classList.add('svg-not-hover1');
  svg2.classList.add('svg-not-hover2');
};

buttonHeader.addEventListener('mouseout', arrowOutHoverHeader);
/******/ })()
;