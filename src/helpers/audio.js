const recordAudio = () => {
    return new Promise(resolve => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new window.MediaRecorder(stream);
                const audioChunks = [];
        
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });
        
                const start = () => {
                    mediaRecorder.start();
                };
        
                const stop = () => {
                    return new Promise(resolve => {
                        mediaRecorder.addEventListener("stop", () => {
                            const audioBlob = new window.Blob(audioChunks);
                            const audioUrl = URL.createObjectURL(audioBlob);
                            const audio = new window.Audio(audioUrl);
                            const play = () => {
                                audio.play();
                            };
            
                            resolve({ audioBlob, audioUrl, play });
                        });
            
                        mediaRecorder.stop();
                        stream.getTracks().forEach(track => track.stop());
                    });
                };
  
                resolve({ start, stop });
            });
    });
};

class AudioRecorder {
    constructor() {
        this.source = null;
        this.isRecording = false;
    }

    init = () => {
        return new Promise((resolve, reject) => {
            recordAudio()
                .then(recorder => {
                    this.source = recorder;
                    resolve();
                });
        });
    }

    startRecording = () => {
        this.isRecording = true;
        if (this.source) {
            this.source.start();
            return;
        }

        this.init().then(() => {
            this.source.start();
        });
    }

    stopRecording = () => {
        console.log(this.source, this.isRecording);
        if (!this.source || !this.isRecording) {
            console.warn('You must first initialize the recorder.');
            return;
        }
        this.source.stop().then(({ play }) => play());
    }
}

export default AudioRecorder;