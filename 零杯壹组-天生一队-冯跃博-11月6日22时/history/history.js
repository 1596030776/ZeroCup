var b1 = document.getElementsByClassName("b1")
var b2 = document.getElementsByClassName("b2")
var b3 = document.getElementsByClassName("b3")
var b4 = document.getElementsByClassName("b4")
var b5 = document.getElementsByClassName("b5")

function over1 (x) {
  setTimeout(function () { b1[0].style.opacity = 1 }, 100)
}
function leave1 (x) {
  setTimeout(function () { b1[0].style.opacity = 0 }, 100)
}
function over2 (x) {
  setTimeout(function () { b2[0].style.opacity = 1 }, 100)
}
function leave2 (x) {
  setTimeout(function () { b2[0].style.opacity = 0 }, 100)
}
function over3 (x) {
  setTimeout(function () { b3[0].style.opacity = 1 }, 100)
}
function leave3 (x) {
  setTimeout(function () { b3[0].style.opacity = 0 }, 100)
}
function over4 (x) {
  setTimeout(function () { b4[0].style.opacity = 1 }, 100)
}
function leave4 (x) {
  setTimeout(function () { b4[0].style.opacity = 0 }, 100)
}
function over5 (x) {
  setTimeout(function () { b5[0].style.opacity = 1 }, 100)
}
function leave5 (x) {
  setTimeout(function () { b5[0].style.opacity = 0 }, 100)
}

document.querySelector('.sail').onclick = function () {
  document.querySelector('#target').scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  })
}