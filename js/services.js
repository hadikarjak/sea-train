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
