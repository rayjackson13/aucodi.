import React from 'react';
import DisableScroll from 'ui/DisableScroll';
import RecordingArea from 'ui/RecordingArea';
import List from 'ui/List';

const Home = ({ tracks }) => (
    <DisableScroll>
        <div className="home">
            <RecordingArea />
            <List tracks={ tracks } />
        </div>
    </DisableScroll>
);

export default Home;