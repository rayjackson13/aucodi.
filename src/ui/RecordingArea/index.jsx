import React from 'react';
import classNames from 'classnames/bind';
import Recorder from 'helpers/audio';
import Counter from 'ui/Counter';
import styles from './RecordingArea.module.sass';
const cx = classNames.bind(styles);

class RecordingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false
        };
        this.recorder = new Recorder();
    }
    
    onClick = e => {
        const { recording } = this.state;
        this.setState({
            recording: !recording
        });
        if (!recording) {
            this.start();
            return;
        }
        this.stop();
    }

    start = () => {
        this.recorder.startRecording();
        const shadow = document.createElement('div');
        shadow.className = 'aucodi-shadow';
        const parent = this.ref.parentNode;
        parent.insertBefore(shadow, this.ref);
        this.shadow = shadow;
    }

    stop = () => {
        this.recorder.stopRecording(this.saveAudio);
        this.shadow.classList.add('aucodi-shadow--hidden');
        setTimeout(() => {
            const parent = this.ref.parentNode;
            parent.removeChild(this.shadow);
        }, 125);
    }

    saveAudio = track => {
        const { pushTrack } = this.props;
        pushTrack({
            ...track,
            name: "New Recording 1",
            date: new Date()
        });
    }

    render() {
        const { recording } = this.state;
        const blockStyle = cx({
            'area': true,
            'area--recording': recording
        });

        return (
            <aside 
                className={ styles.wrap } 
                ref={ node => this.ref = node }
            >
                <div className={ blockStyle }>
                    <div className={ styles.data }>
                        <div className={ styles.opacity }>
                            <h3 className={ styles.title }>New Recording 1</h3>
                            { recording && <Counter classes={ styles.time } /> }
                        </div>
                    </div>
                    <button 
                        type="button" 
                        className={ styles.button }
                        onClick={ this.onClick }
                    >
                    Record
                    </button>
                </div>
            </aside>
        );
    }
}

export default RecordingArea;