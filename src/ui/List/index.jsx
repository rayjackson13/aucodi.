import React from 'react';
import Item from './Item';
import styles from './List.module.sass';

const List = ({ tracks }) => (
    <ul className={ styles.wrap }>
        {
            tracks.map((val, idx) => (
                <Item key={ idx } { ...val } />
            ))
        }
    </ul>
);

export default List;