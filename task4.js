const images = [
    "https://picsum.photos/id/1011/600/350",
    "https://picsum.photos/id/1025/600/350",
    "https://picsum.photos/id/1035/600/350",
    "https://picsum.photos/id/1041/600/350",
    "https://picsum.photos/id/1067/600/350"
];

let index = 0;

const slide = document.getElementById("slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const carousel = document.getElementById("carousel");

function showImage() {
    slide.src = images[index];
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
});

// Auto-slide every 3 seconds
let autoSlide = setInterval(() => {
    index = (index + 1) % images.length;
    showImage();
}, 3000);

// Bonus: pause on hover
carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

carousel.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        index = (index + 1) % images.length;
        showImage();
    }, 3000);
});
