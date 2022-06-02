let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = this.window.scrollY;

    bg.style.top = value * 0.05 + 'rem';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.015 + 'rem';
    road.style.top = value * 0.015 + 'rem';
    text.style.top = value * 0.1 + 'rem';

})

