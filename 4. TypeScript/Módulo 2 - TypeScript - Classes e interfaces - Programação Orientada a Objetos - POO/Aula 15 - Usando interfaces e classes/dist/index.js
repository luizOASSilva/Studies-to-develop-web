"use strict";
class VideoPlayer {
    videoPlayer;
    playButton;
    stopButton;
    constructor(elements) {
        this.videoPlayer = elements.videoPlayer;
        this.playButton = elements.playButton;
        this.stopButton = elements.stopButton;
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video');
    const play = document.querySelector('.play');
    const stop = document.querySelector('.stop');
    if (video instanceof HTMLVideoElement &&
        play instanceof HTMLButtonElement &&
        stop instanceof HTMLButtonElement) {
        const videoPlayer = new VideoPlayer({
            videoPlayer: video,
            playButton: play,
            stopButton: stop,
        });
        videoPlayer.iniciarEventos();
    }
});
//# sourceMappingURL=index.js.map