interface VideoPlayerElements { // formato esperado do objeto para utilização da classe
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

class VideoPlayer { // classe que controla o estado do vídeo
    private videoPlayer: HTMLVideoElement; // definindo os atributos da classe
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(elements: VideoPlayerElements) { // definindo o construtor da classe para atribuição de valor
        this.videoPlayer = elements.videoPlayer;
        this.playButton = elements.playButton;
        this.stopButton = elements.stopButton;
    }

    playToggle(): void { // função que realiza a troca de pausado para rodando
        if (this.videoPlayer.paused) {
            this.videoPlayer.play(); // métodos já existentes em HTMLVideoElement
            this.playButton.innerText = 'Pause';
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }

    stop(): void { // função para pausar o vídeo
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }

    iniciarEventos(): void { // função inicializadora, assiste(escuta) os cliques nos botões
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });

        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => { // executa a função assim que o HTML e o JavaScript é 100% carregado
    const video = document.querySelector('.video');
    const play = document.querySelector('.play');
    const stop = document.querySelector('.stop');

    if ( // previne que o valor setado na variável seja realmente um elemento DOM do tipo esperado
        video instanceof HTMLVideoElement &&
        play instanceof HTMLButtonElement &&
        stop instanceof HTMLButtonElement
    ) {
        const videoPlayer = new VideoPlayer({
            videoPlayer: video,
            playButton: play,
            stopButton: stop,
        });

        videoPlayer.iniciarEventos(); // chama iniciarEvenetos se a condição de existência do DOM
    }
});