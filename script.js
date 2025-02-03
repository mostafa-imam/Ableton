const nav_1 = document.querySelector(".nav-1");
const header = document.querySelector("header");
const main_nav = document.querySelector('ul.main-nav');
const logo = document.querySelector(".nav-1 > a");
const nav_2 = document.querySelector(".nav-2");
const main_Nav_2 = document.querySelector(".main-nav-2");
const image = document.querySelector('.headerImage');
const nav_2_sub_3 = document.querySelector('.nav-2-sub-3');

const drop_Down_Menu = document.createElement('h1');

const screenWidth = document.documentElement.clientWidth || window.innerWidth;

const clone_nav_2_sub_3 = nav_2_sub_3.cloneNode(true);

drop_Down_Menu.classList = "drop_Down_Menu";
drop_Down_Menu.textContent = "Menu";
logo.insertAdjacentElement("afterend", drop_Down_Menu);

header.classList.remove("dropDownHeader");
main_nav.classList.remove("mainNavMenu");
nav_2.classList.remove('nav-2-menu');
main_Nav_2.classList.remove('main-nav-2-menu');
nav_1.classList.remove('nav-1-menu');

drop_Down_Menu.addEventListener("click", showMenu);

function showMenu() {
    header.classList.toggle('dropDownHeader');
    main_nav.classList.toggle("mainNavMenu");
    nav_2.classList.toggle('nav-2-menu');

    main_Nav_2.classList.toggle('main-nav-2');
    main_Nav_2.classList.toggle('main-nav-2-menu');

    nav_1.classList.toggle('nav-1');
    nav_1.classList.toggle('nav-1-menu');

    if (header.classList.contains('dropDownHeader') ) {
        image.setAttribute('src', './assets/Ableton-logo-menu.svg');
        drop_Down_Menu.classList.add('arrow_up');
    } else {
        image.setAttribute('src', './assets/Ableton-logo.svg');
        drop_Down_Menu.classList.remove('arrow_up');
    }

}