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
            this.recorder.startRecording();
            return;
        }
        this.recorder.stopRecording();
    }

    render() {
        const { recording } = this.state;
        const blockStyle = cx({
            'area': true,
            'area--recording': recording
        });

        return (
            <aside className={ blockStyle }>
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
            </aside>
        );
    }
}

export default RecordingArea;