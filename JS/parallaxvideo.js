document.addEventListener("DOMContentLoaded", function() {
    // Parallax effect for background video
    window.addEventListener('scroll', function() {
        const resumeSection = document.getElementById('Resume');
        const video = resumeSection.querySelector('.background-video');
        const scrollPosition = window.scrollY;
        const offset = resumeSection.offsetTop;

        if (scrollPosition >= offset && scrollPosition <= offset + resumeSection.offsetHeight) {
            const parallaxOffset = (scrollPosition - offset) * 0.5; // Adjust the multiplier to change the parallax intensity
            video.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px))`;
        }
    });
});
