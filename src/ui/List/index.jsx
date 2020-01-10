import React from 'react';
import DisableScroll from 'ui/DisableScroll';
import Track from './Track';
import Folder from './Folder';
import styles from './List.module.sass';

const List = ({ data, type }) => (
    <ul className={ styles.wrap }>
        <DisableScroll classes="scrollable--recording">
            {type === 'tracks' && (
                data.map((val, idx) => (
                    <Track key={ idx } { ...val } />
                ))
            )}
            {type === 'folders' && (
                data.map((val, idx) => (
                    <Folder key={ idx } { ...val } />
                ))
            )}
        </DisableScroll>
    </ul>
);

export default List;