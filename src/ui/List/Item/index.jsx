import React from 'react';
import { getDateString } from 'helpers/date';
import { getMinutes, getSeconds } from 'helpers/time';
import styles from '../List.module.sass';

const Item = ({ duration, name, date }) => {
    const time = duration * 1000;
    const durationString = `${ getMinutes(time) }:${ getSeconds(time) }`;
    return (
        <li className={ styles.item }>
            <div className={ styles.itemContainer }>
                <h2 className={ styles.title }>{ name }</h2>
                <span className={ styles.label }>Misc</span>
            </div>
            <div className={ styles.itemContainer }>
                <span className={ styles.date }>{ getDateString(date) }</span>
                <span className={ styles.duration }>
                    { durationString }
                </span>
            </div>
        </li>
    );
};

export default Item;