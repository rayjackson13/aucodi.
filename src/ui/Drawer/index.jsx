import React from 'react';
import classNames from 'classnames';

import DisableScroll from 'ui/DisableScroll';
import Logo from 'assets/img/banner.png';
import menu from './menu';
import MenuItem from './MenuItem';

const Drawer = ({ visible = false, onItemClick }) => {
    const style = classNames({
        "drawer": true,
        "drawer--hidden": !visible
    });

    const onLogoutClick = (e) => {
        onItemClick(e);
        // logout(resetProfile);
    };

    return (
        <aside className={ style }>
            <DisableScroll full classes="drawer__scroll-content">
                <div className="drawer-logo">
                    <img className="drawer-logo__img" src={ Logo } />
                </div>
                <div className="drawer-block drawer-block--padding">
                    <nav>
                        <ul className="drawer-menu">
                            { menu.map((val, idx) => (
                                <MenuItem 
                                    key={ idx } 
                                    onLogoutClick={ onLogoutClick }
                                    onItemClick={ onItemClick }
                                    { ...val }
                                />
                            )) }
                        </ul>
                    </nav>
                </div>
                <div className="drawer-copyright">
                    <p className="drawer-copyright__text">
                        © Copyright Ray Jackson 2019
                    </p>
                </div>
            </DisableScroll>
        </aside>
    );
};

export default Drawer;