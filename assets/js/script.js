const btn_menu = document.getElementById('menu-toggle');
const menu_mobile = document.querySelector('.menu_full');
const btn_close_menu = document.querySelector('.header_menu_mobile i');

if(btn_menu){
    btn_menu.addEventListener('click', () => {

        menu_mobile.classList.add('open_menu');

    });
}

if(btn_close_menu){
    btn_close_menu.addEventListener('click', () => {

        menu_mobile.classList.remove('open_menu');

    });
}