const listGif = document.querySelectorAll(".image-gif");
const btnNhan = document.querySelector('.btn-nhan');
const btnKhongNhan = document.querySelector('.btn-khong-nhan');
const btnNhanLixi = document.querySelector('.btn-nhan-lixi');
const btnOK = document.querySelector('.btn-ok');
const lixi = document.querySelector('.lixi');
const noLixi = document.querySelector('.no-lixi');
const body = document.querySelector("body");
const lixiWidth = lixi.offsetWidth;
const lixiHeight = lixi.offsetHeight;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


btnNhanLixi.addEventListener("click", function () {
    btnNhanLixi.style.display = "none";
    btnNhan.style.display = "block";
})

btnNhan.addEventListener("mouseenter", function () {
    randomPosision();
})
btnNhan.addEventListener("click", function () {
    randomPosision();
})

btnKhongNhan.addEventListener("click", function () {
    noLixi.style.display = "block";
    btnNhan.style.display = "none";
});

btnOK.addEventListener("click", function () {
    btnNhanLixi.style.display = "block";
    noLixi.style.display = "none";
})

createHoaMai();


function randomPosision() {

    const randomX = Math.floor(Math.random() * (screenWidth - lixiWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - lixiHeight));
    btnNhan.style.left = randomX + 'px';
    btnNhan.style.top = randomY + 'px';
}


function getRandomNumber(min, max) {
    const random = Math.random();
    return Math.floor(random * (max - min + 1)) + min;
}





