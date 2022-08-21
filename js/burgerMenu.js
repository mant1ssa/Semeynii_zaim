const iconMenu = document.querySelector('.header__burger');
if(iconMenu){
    const menuBody = document.querySelector('.header-page__nav');

    iconMenu.addEventListener('click', function(e){
        menuBody.classList.toggle('is-active');
    })
}