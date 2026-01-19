const images = document.querySelectorAll(".media-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

images.forEach(img => {
    console.log("hello");
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }
});
