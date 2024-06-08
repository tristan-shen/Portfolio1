/**
 * 2. VIDEO HOVER EFFECT
 * Play video on hover and reset on mouseout
 */

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.hover-video');

    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            this.play();
        });

        video.addEventListener('mouseout', function() {
            this.pause();
            this.currentTime = 0;  // Resets video to the start
        });
    });
});

