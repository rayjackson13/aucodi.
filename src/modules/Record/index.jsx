import React from 'react';
import DisableScroll from 'ui/DisableScroll';
import Button from 'ui/Button';
import AudioRecorder from 'helpers/audio';

class Record extends React.Component {
    constructor(props) {
        super(props);
        const recorder = new AudioRecorder();
        recorder.init();
        this.recorder = recorder;
    }

    record = () => {
        this.recorder.startRecording();
    }

    stopRecording = () => {
        this.recorder.stopRecording();
    }

    render () {
        return (
            <DisableScroll>
                <div className="record">
                    <div className="container container--limited record__wrap">
                        <h2 className="record__title">New Recording</h2>
                        <Button block accent onClick={ this.record }>Start recording</Button>
                        <Button block gray onClick={ this.stopRecording }>Stop recording</Button>
                    </div>
                </div>
            </DisableScroll>
        );
    }
}

export default Record;