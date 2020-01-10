import React from 'react';
import { Link } from 'react-router-dom';
import { getHours, getCutMinutes, getSeconds } from 'helpers/time';
import styles from '../List.module.sass';

const Folder = ({ duration = 0, name, length = 0 }) => {
    const time = duration * 1000;
    const durationString = `${ getHours(time)}:${ getCutMinutes(time) }:${ getSeconds(time) }`;
    return (
        <li className={ styles.item }>
            <Link className={ styles.item__link } to={ `/app/memos/${ name }` }>
                <div className={ styles.itemContainer }>
                    <h2 className={ styles.title }>{ name }</h2>
                </div>
                <div className={ styles.itemContainer }>
                    <span className={ styles.date }>{ length } Memos</span>
                    <span className={ styles.duration }>
                        { durationString }
                    </span>
                </div>
            </Link>
        </li>
    );
};

export default Folder;