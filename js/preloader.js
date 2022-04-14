window.onload = () => {
    // Preloader
    window.setTimeout(fadeout, 300);
};

// Preloader
function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
}
