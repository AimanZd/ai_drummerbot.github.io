document.addEventListener("DOMContentLoaded", function() {
    const soundButtons = document.querySelectorAll('.sound');

    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audio = this.previousElementSibling;
            if (audio.paused) {
                audio.play();
                this.textContent = 'Pause';
            } else {
                audio.pause();
                this.textContent = 'Listen';
            }
        });
    });
});
