'use strict';

const openMenuButton = document.querySelector('.open__menu__button');
const closeMenuButton = document.querySelector('.close__menu__button');
const openMenuText = document.querySelector('.open__menu__text');
const closedMenu = document.querySelector('.closed__menu');
const openedMenu = document.querySelector('.opened__menu');

let onOpenMenuButtonClick = (e) => {
    openMenuText.classList.add('hidden');
    openMenuButton.classList.add('hidden');
    openedMenu.classList.remove('hidden');
}

let onCloseMenuButtonClick = (e) => {
    openMenuText.classList.remove('hidden');
    openMenuButton.classList.remove('hidden');
    openedMenu.classList.add('hidden');
}


openMenuButton.addEventListener('click', onOpenMenuButtonClick);
closeMenuButton.addEventListener('click', onCloseMenuButtonClick);