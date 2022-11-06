var astro1 = document.querySelector(".astro1");
var astro2 = document.querySelector(".astro2");
var astro3 = document.querySelector(".astro3");
var msg1 = document.querySelector(".msg1");
var msg2 = document.querySelector(".msg2");
var msg3 = document.querySelector(".msg3");
astro1.addEventListener('mousedown', function () {
    msg1.style.display = 'block';
})
astro1.addEventListener('mouseup', function () {
    msg1.style.display = 'none';
})
astro1.addEventListener('mouseout', function () {
    msg1.style.display = 'none';
})
astro2.addEventListener('mousedown', function () {
    msg2.style.display = 'block';
})
astro2.addEventListener('mouseup', function () {
    msg2.style.display = 'none';
})
astro2.addEventListener('mouseout', function () {
    msg2.style.display = 'none';
})
astro3.addEventListener('mousedown', function () {
    msg3.style.display = 'block';
})
astro3.addEventListener('mouseup', function () {
    msg3.style.display = 'none';
})
astro3.addEventListener('mouseout', function () {
    msg3.style.display = 'none';
})