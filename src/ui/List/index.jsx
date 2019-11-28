import React from 'react';
import DisableScroll from 'ui/DisableScroll';
import Item from './Item';
import styles from './List.module.sass';

const List = ({ tracks }) => (
    <ul className={ styles.wrap }>
        <DisableScroll classes="scrollable--recording">
            {
                tracks.map((val, idx) => (
                    <Item key={ idx } { ...val } />
                ))
            }
        </DisableScroll>
    </ul>
);

export default List;