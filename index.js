const scrollList = document.getElementById('scroll-list'),
    btnLeft = document.getElementById("scrollLeft"),
    btnRight = document.getElementById("scrollRight");

let scrollSpeed = 200;

var x = window.matchMedia("(max-width: 900px)");


function changeScrollSpeed(x) {
    if (x.matches) {
        scrollSpeed = 200;
    } else scrollSpeed = 600;    
}

changeScrollSpeed(x);

x.addEventListener("change", () => {
    changeScrollSpeed(x)
});

function scrollRight() {
    scrollList.scrollBy({
        left: scrollSpeed,
        behavior: 'smooth'
    });
}

function scrollLeft() {
    scrollList.scrollBy({
        left: -scrollSpeed,
        behavior: 'smooth'
    });
}

btnLeft.onclick = function () {
    scrollLeft();
};
btnRight.onclick = function () {
    scrollRight();
};