import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { logout } from 'actions/auth';
import DisableScroll from 'ui/DisableScroll';
import Logo from 'assets/img/banner.png';
import menu from './menu';
import MenuItem from './MenuItem';

const Drawer = ({ visible = false, onItemClick, logout }) => {
    const style = classNames({
        "drawer": true,
        "drawer--hidden": !visible
    });

    const onLogoutClick = (e) => {
        onItemClick(e);
        logout();
    };

    return (
        <aside className={ style }>
            <DisableScroll full classes="drawer__scroll-content">
                <div className="drawer-logo">
                    <img className="drawer-logo__img" src={ Logo } alt="" />
                </div>
                <div className="drawer-wrap">
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
                </div>
            </DisableScroll>
        </aside>
    );
};

const mapDispatchToProps = {
    logout
};

export default connect(null, mapDispatchToProps)(Drawer);