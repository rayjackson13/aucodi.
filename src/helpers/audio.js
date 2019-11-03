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
                    });
                };
  
                resolve({ start, stop });
            });
    });
};

class AudioRecorder {
    constructor() {
        this.recorder = null;
        this.isRecording = false;
    }

    init = () => {
        recordAudio().then(recorder => this.recorder = recorder);
    }

    startRecording = () => {
        if (!this.recorder) {
            console.warn('You must first initialize the recorder.');
            return;
        }
        this.recorder.start();
        this.isRecording = true;
    }

    stopRecording = () => {
        console.log(this.recorder, this.isRecording)
        if (!this.recorder || !this.isRecording) {
            console.warn('You must first initialize the recorder.');
            return;
        }
        this.recorder.stop().then(({ play }) => play());
    }
}

export default AudioRecorder;