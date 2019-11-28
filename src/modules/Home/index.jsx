import React from 'react';
import RecordingArea from 'ui/RecordingArea';
import List from 'ui/List';

const Home = ({ tracks }) => (
    // <div className="home">
    <React.Fragment>
        <List tracks={ tracks } />
        <RecordingArea />
    </React.Fragment>
    // </div>
);

export default Home;