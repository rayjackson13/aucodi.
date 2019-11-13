import React from 'react';
import DisableScroll from 'ui/DisableScroll';
import RecordingArea from 'ui/RecordingArea';
import Button from 'ui/Button';

const Home = props => (
    <DisableScroll>
        <div className="home">
            <div className="container container--limited home__wrap">
                <h2 className="home__title">Welcome to AuCodi</h2>
                <Button block accent to="/record">Make a new record</Button>
            </div>
            <RecordingArea />
        </div>
    </DisableScroll>
);

export default Home;