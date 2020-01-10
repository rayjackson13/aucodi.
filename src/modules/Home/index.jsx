import React, { useEffect } from 'react';
import List from 'ui/List';

const Home = props => {
    const { folders, error, getFolders } = props;
    useEffect(() => {
        if (!folders && !error) {
            getFolders();
        }
    });
    
    return (
        <React.Fragment>
            <List data={ folders || [] } type="folders" />
        </React.Fragment>
    );
};

export default Home;