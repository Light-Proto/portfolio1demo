window.addEventListener("scroll" , function(){
    var header = document.querySelector(".parent");
    var imgel = document.querySelector(".myImg");
    imgel.classList.toggle("invert" , window.scrollY > 1020 && window.scrollY < 3890);
    header.classList.toggle("sticky", window.scrollY > 1020 && window.scrollY < 3890);
})