// const slider = document.querySelector('calc__range');
// const output = document.querySelector('calc__sum-right');

const slider1 = document.getElementById('calc__range-1');
const output1 = document.getElementById('zxc-1');

// console.log(slider1);
// console.log(output1);

const slider2 = document.getElementById('calc__range-2');
const output2 = document.getElementById('zxc-2');

// console.log(slider2);
// console.log(output2);



output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

slider1.oninput = function(){
    output1.innerHTML = this.value + " &#8381";
}
slider2.oninput = function(){
    output2.innerHTML = this.value + " дней";
}

slider1.addEventListener("mousemove", function(){
    var x = slider1.value / 300;
    var color = 'linear-gradient(90deg, #007aff ' + x + '%, #023b6d ' + x + '%)';
    slider1.style.background = color;
})
slider2.addEventListener("mousemove", function(){
    var x = slider2.value * 3.33;
    var color = 'linear-gradient(90deg, #007aff ' + x + '%, #023b6d ' + x + '%)';
    slider2.style.background = color;
})