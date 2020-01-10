import React, { useEffect } from 'react';
import RecordingArea from 'ui/RecordingArea';
import List from 'ui/List';

const Memos = props => {
    const { match, tracks, error, getTracks, pushTrack } = props;
    const { name } = match.params;
    useEffect(() => {
        if (!tracks && !error) {
            getTracks(name);
        }
    });
    
    return (
        <React.Fragment>
            <List data={ tracks || [] } type="folders" /> 
            <RecordingArea pushTrack={ pushTrack } />
        </React.Fragment>
    );
};

export default Memos;