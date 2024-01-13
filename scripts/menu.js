const day_night = document.querySelectorAll('.version');
const icon = document.querySelectorAll('.version svg use');
const menu_open = document.querySelector('.ham');
const menu_close = document.querySelector('.close');
const phone_menu = document.getElementById('phone-menu');

const night = document.querySelectorAll('.night');
const day = document.querySelectorAll('.day');

menu_open.addEventListener('click', () =>
{
    phone_menu.style.display = 'block';
})

menu_close.addEventListener('click', () =>
{
    phone_menu.style.display = 'none';
})



day_night.forEach(version => (
    version.addEventListener('click', () =>
{
    if(document.querySelector('body').classList.contains('dark'))
    {
        document.querySelector('body').classList.remove('dark');
        night.forEach(element => {
            element.style.display = 'none';
        });
        day.forEach(element => {
            element.style.display = 'block';
        });
        icon.forEach(element => {
            element.setAttribute('xlink:href', './img/sprite.svg#dark');
        });
    } else {
        document.querySelector('body').classList.add('dark');
        night.forEach(element => {
            element.style.display = 'block';
        });
        day.forEach(element => {
            element.style.display = 'none';
        });
        icon.forEach(element => {
            element.setAttribute('xlink:href', './img/sprite.svg#light');
        });
    }
})));