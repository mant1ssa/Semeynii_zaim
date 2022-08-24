// const iconMenu = document.querySelector('.nav-btn');
// if(iconMenu){
//     const menuBody = document.querySelector('.header-page__nav');

//     iconMenu.addEventListener('click', function(e){
//         menuBody.classList.toggle('active');
//     })
// }

const iconMenu = document.querySelector('.nav-btn');
const nav = document.querySelector('.header-page__nav');

console.log(iconMenu);

if(iconMenu){
    // const menuBody = document.querySelector('.header-page__nav');

    // iconMenu.addEventListener('click', function(e){
    //     menuBody.classList.toggle('open');
    // })

    iconMenu.onclick = () =>{
        if(nav.classList.toggle('open')){
            // iconMenu.style.setProperty("position", "23.5%", "important");
            iconMenu.position = "23.5%";
        }else{
            // iconMenu.style.setProperty("position", "10%", "important");
            iconMenu.position = "10%";
        }
    }
}