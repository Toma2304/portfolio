const menu_open = document.querySelector('.ham');
const menu_close = document.querySelector('.close');
const phone_menu = document.getElementById('phone-menu');

menu_open.addEventListener('click', () =>
{
    phone_menu.style.display = 'block';
})

menu_close.addEventListener('click', () =>
{
    phone_menu.style.display = 'none';
})
