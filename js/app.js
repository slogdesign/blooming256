'use strict';

const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');
const navBar = document.querySelector('.navbar');
const bloomStage = document.querySelector('.bloom-stage');
const bloomFlip = document.querySelector('.bloom-flip');

bxMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('bx-menu')) {
    navBar.classList.add('show-navbar');
    bxMenu.classList.add('hide-bx');
    bxX.classList.add('show-bx');
  }
});

bxX.addEventListener('click', (e) => {
  if (e.target.classList.contains('bx-x')) {
    navBar.classList.remove('show-navbar');
    bxMenu.classList.remove('hide-bx');
    bxX.classList.remove('show-bx');
  }
});

bloomStage.addEventListener('mouseenter', () => {
  bloomFlip.style.transform = 'rotateY(360deg)';
});
