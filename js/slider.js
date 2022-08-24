// const reviews = document.querySelectorAll('.reviews__review-sl');
// const sliderLine = document.querySelector('.slider-line');

// let count = 0;
// let width;

// function Init(){
//     console.log('resize');
//     const slider = document.querySelector('.slider');
//     width = slider.offsetWidth;
//     console.log(width);
//     slider.style.width = '250px';
//     console.log(count);
//     rollSlider();
// }

// Init();

// document.querySelector('.slider-next').addEventListener('click', function(){
//     count++;
//     if(count > reviews.length){
//         count = 1;
//     }
//     rollSlider();
// });
// document.querySelector('.slider-prev').addEventListener('click', function(){
//     count--;
//     if(Math.abs(count) < reviews.length){
//         count = reviews.length - 1;
//     }
//     rollSlider();
// })

// function rollSlider(){
//     sliderLine.style.transform = 'translate(-' + count*250 + 'px)';
//     console.log(count);
// }




const images = document.querySelectorAll('.reviews__review-sl');
const sliderLine = document.querySelector('.slider-line');


// console.log(images);
// console.log(sliderLine);
// console.log(document.querySelector('.slider-next'));

let count = 0;
let width;

function init() {
    // console.log('resize');
    const slider = document.querySelector('.slider');
    slider.style.width = '270px';
    // console.log(count);
    rollSlider();
}

init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * 270 + 'px)';
    // console.log(count);
}