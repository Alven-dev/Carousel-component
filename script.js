let left = document.getElementById("left");
let right = document.getElementById("right");
let one = document.getElementById("item-one");
let two = document.getElementById("item-two");
let three = document.getElementById("item-three");

let images = [one, two, three];
let index = 0;

left.addEventListener("click", function() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
});

right.addEventListener("click", function() {
    images[index].classList.remove("active");
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
});



