var b1 = document.querySelector(".b1");
var huoyun = document.querySelector("#huoyun");
var b2 = document.querySelector(".b2");
var shiyan2 = document.querySelector("#shiyan2");
var b3 = document.querySelector(".b3");
var zairen = document.querySelector("#zairen");
var b4 = document.querySelector(".b4");
var hexin = document.querySelector("#hexin");
var b5 = document.querySelector(".b5");
var shiyan1 = document.querySelector("#shiyan1");

b1.addEventListener('mouseover', function () {
    huoyun.style.display = 'block';
    $('#huoyun').siblings().css('display', 'none');
})
b1.addEventListener('mouseout', function () {
    if ($('.intro4').css('display') != 'block') {
        huoyun.style.display = 'none';
    }
})

b2.addEventListener('mouseover', function () {
    shiyan2.style.display = 'block';
    $('#shiyan2').siblings().css('display', 'none');
})
b2.addEventListener('mouseout', function () {
    if ($('.intro3').css('display') != 'block') {
        shiyan2.style.display = 'none';
    }
})

b3.addEventListener('mouseover', function () {
    zairen.style.display = 'block';
    $('#zairen').siblings().css('display', 'none');
})
b3.addEventListener('mouseout', function () {
    if ($('.intro5').css('display') != 'block') {
        zairen.style.display = 'none';
    }
})

b4.addEventListener('mouseover', function () {
    hexin.style.display = 'block';
    $('#hexin').siblings().css('display', 'none');
})
b4.addEventListener('mouseout', function () {
    if ($('.intro1').css('display') != 'block') {
        hexin.style.display = 'none';
    }
})

b5.addEventListener('mouseover', function () {
    shiyan1.style.display = 'block';
    $('#shiayn1').siblings().css('display', 'none');
})
b5.addEventListener('mouseout', function () {
    if ($('.intro2').css('display') != 'block') {
        shiyan1.style.display = 'none';
    }
})