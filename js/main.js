const slides = document.querySelectorAll('.slide-item');
const dots = document.querySelectorAll('.control-dot');
const progressBar = document.getElementById('slideProgress');
const playPauseIcon = document.getElementById('playPauseIcon');
const autoPlayToggle = document.getElementById('autoPlayToggle');
let currentSlide = 0;
let slideInterval;
let isPlaying = true;
let progressInterval;
const slideCount = slides.length;
const slideDuration = 5000; // 5 ثواني لكل سلايد
slides[0].classList.add('active-slide');
dots[0].classList.add('active-dot');
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active-slide'));
    dots.forEach(dot => dot.classList.remove('active-dot'));
    slides[index].classList.add('active-slide');
    dots[index].classList.add('active-dot');
    currentSlide = index;
    resetProgress();
}
function nextSlide() {
    let nextIndex = (currentSlide + 1) % slideCount;
    showSlide(nextIndex);
}
function startAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    if (progressInterval) clearInterval(progressInterval);
    slideInterval = setInterval(nextSlide, slideDuration);
    startProgress();
    isPlaying = true;
    playPauseIcon.className = 'fas fa-pause';
}
function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    if (progressInterval) clearInterval(progressInterval);
    isPlaying = false;
    playPauseIcon.className = 'fas fa-play';
    progressBar.style.width = '0%';
    progressBar.classList.remove('active-progress');
}
function startProgress() {
    progressBar.style.width = '0%';
    progressBar.classList.add('active-progress');
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 10);
}
function resetProgress() {
    if (isPlaying) {
        progressBar.style.width = '0%';
        progressBar.classList.remove('active-progress');
        setTimeout(() => {
            progressBar.classList.add('active-progress');
            progressBar.style.width = '100%';
        }, 50);
    }
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        if (isPlaying) {
            stopAutoPlay();
            startAutoPlay();
        }
    });
});
autoPlayToggle.addEventListener('click', () => {
    if (isPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
});
const imageShowcase = document.getElementById('imageShowcase');
imageShowcase.addEventListener('mouseenter', () => {
    if (isPlaying) {
        stopAutoPlay();
    }
});
imageShowcase.addEventListener('mouseleave', () => {
    if (!isPlaying) {
        startAutoPlay();
    }
});
startAutoPlay();
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(function () {
                if (loader.parentNode) {
                    loader.style.display = 'none';
                }
            }, 500);
        }
    }, 1500); // 1.5 ثانية تحميل (يمكن تعديلها)
});
window.addEventListener('load', function () {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('loaded');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    function toggleBackToTop() {
        const landingSection = document.querySelector('.landing-section');
        if (landingSection) {
            const scrollThreshold = landingSection.offsetHeight + 100;
            if (window.scrollY > scrollThreshold) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        } else {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop);
});
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(function () {
                if (loader.parentNode) {
                    loader.style.display = 'none';
                }
            }, 500);
        }
    }, 1500); // 1.5 ثانية تحميل (يمكن تعديلها)
});
window.addEventListener('load', function () {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('loaded');
    }
});