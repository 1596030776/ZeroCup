var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var huoyun = document.querySelector("#huoyun");
var shiyan1 = document.querySelector("#shiyan1");
var shiyan2 = document.querySelector("#shiyan2");
var hexin = document.querySelector("#hexin");
var zairen = document.querySelector("#zairen");
var intro1 = document.querySelector(".intro1");
var intro2 = document.querySelector(".intro2");
var intro3 = document.querySelector(".intro3");
var intro4 = document.querySelector(".intro4");
var intro5 = document.querySelector(".intro5");
b1.addEventListener('mousedown', function () {
    huoyun.style.opacity = "0.6";
    if(intro4.style.display == 'block'){
        intro4.style.display = 'none';
    }else{
        $('.intro4').siblings().css('display','none');
        $('#huoyun').siblings().css('display','none');
        intro4.style.display  = 'block';
    }
})
b1.addEventListener('mouseup', function () {
    huoyun.style.opacity = "1";
})
b2.addEventListener('mousedown', function () {
    shiyan2.style.opacity = "0.6";
    
    if(intro3.style.display == 'block'){
        intro3.style.display = 'none';
    }else{
        $('.intro3').siblings().css('display','none');
        $('#shiyan2').siblings().css('display','none');
        intro3.style.display  = 'block';
    }
})
b2.addEventListener('mouseup', function () {
    shiyan2.style.opacity = "1";
})
b3.addEventListener('mousedown', function () {
    zairen.style.opacity = "0.6";
    if(intro5.style.display == 'block'){
        intro5.style.display = 'none';
    }else{
        $('.intro5').siblings().css('display','none');
        $('#zairen').siblings().css('display','none');
        intro5.style.display  = 'block';
    }
})
b3.addEventListener('mouseup', function () {
    zairen.style.opacity = "1";
})
b4.addEventListener('mousedown', function () {
    hexin.style.opacity = "0.6";
    if(intro1.style.display == 'block'){
        intro1.style.display = 'none';
    }else{
        $('.intro1').siblings().css('display','none');
        $('#hexin').siblings().css('display','none');
        intro1.style.display  = 'block';
    }
})
b4.addEventListener('mouseup', function () {
    hexin.style.opacity = "1";
})
b5.addEventListener('mousedown', function () {
    shiyan1.style.opacity = "0.6";
    if(intro2.style.display == 'block'){
        intro2.style.display = 'none';
    }else{
        $('.intro2').siblings().css('display','none');
        $('#shiyan1').siblings().css('display','none');
        intro2.style.display  = 'block';
    }
})
b5.addEventListener('mouseup', function () {
    shiyan1.style.opacity = "1";
})