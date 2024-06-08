document.querySelector('.stamp').addEventListener('click', function() {
    var stamp = this;
    var lidOne = document.querySelector('.lid.one');
    var lidTwo = document.querySelector('.lid.two');
    var letter = document.querySelector('.letter');
    var resumeContent = document.getElementById('resumeContent');
    var envelope = document.querySelector('.envelope');
    var wrapper = document.querySelector('.wrapper');

    // Toggle between transformations for opening and closing
    if (stamp.classList.contains('activated')) {
        lidOne.style.transform = 'rotateX(0deg)';
        lidOne.style.transitionDelay = '0.75s';

        lidTwo.style.transform = 'rotateX(90deg)';
        lidTwo.style.transitionDelay = '0.5s';

        letter.style.transform = 'translateY(0)';
        letter.style.transitionDelay = '0.5s';

        resumeContent.style.display = 'none';
        stamp.style.display = 'block';
        
        // Show the envelope parts again
        lidOne.style.display = 'block';
        lidTwo.style.display = 'block';
        letter.style.display = 'block';
        envelope.style.display = 'block';
        wrapper.style.backgroundColor = '#3760C9'; // Reset background color if needed
    } else {
        lidOne.style.transform = 'rotateX(90deg)';
        lidOne.style.transitionDelay = '0s';

        lidTwo.style.transform = 'rotateX(180deg)';
        lidTwo.style.transitionDelay = '0.25s';

        letter.style.transform = 'translateY(-50px)';
        letter.style.transitionDelay = '0.5s';

        // Hide the envelope parts after the animation completes
        setTimeout(function() {
            resumeContent.style.display = 'block';
            stamp.style.display = 'none';
            lidOne.style.display = 'none';
            lidTwo.style.display = 'none';
            letter.style.display = 'none';
            envelope.style.display = 'none';
            wrapper.style.backgroundColor = 'transparent'; // Hide the wrapper background
        }, 750); // Ensure the envelope animation completes before hiding the parts
    }

    stamp.classList.toggle('activated');
});
