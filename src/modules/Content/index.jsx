import React from 'react';
import classNames from 'classnames';

import getHistory from 'helpers/history';
import { isRecommendedScreen } from 'helpers/locations';
import Swiper from 'helpers/swipe';
import Drawer from 'ui/Drawer';
import Header from 'ui/Header';

class Content extends React.Component {
    state = {
        drawerOpened: false
    }

    toggleMenu = () => {
        this.setState(({ drawerOpened }) => ({
            drawerOpened: !drawerOpened
        }));
    }

    hideMenu = () => {
        const { drawerOpened } = this.state;
        drawerOpened && this.setState({
            drawerOpened: false
        });
    }

    showMenu = () => {
        const { drawerOpened } = this.state;
        !drawerOpened && this.setState({
            drawerOpened: true
        });
    }

    hideMenuSwipe = (e) => {
        const { pageLink = '' } = this.props;
        if (isRecommendedScreen(pageLink)) {
            if (this.isSwipeProhibited(e)) {
                return;
            }
        }
        this.hideMenu();
    }

    showMenuSwipe = (e) => {
        const { pageLink = '' } = this.props;
        if (isRecommendedScreen(pageLink)) {
            if (this.isSwipeProhibited(e)) {
                return;
            }
        }
        this.showMenu();
    }

    isSwipeProhibited = e => {
        if (!e.target) {
            return false;
        }
        const regex = /recommended-tab[.]*/i;
        return regex.test(e.target.classList);
    }

    goBack = (history, page) => () => {
        history.replace(page);
    }

    getHeaderProps = () => {
        const history = getHistory();
        const { location: { state } } = history;
        if (state && state.prevPage) {
            return {
                showsMenuButton: false,
                onButtonClick: this.goBack(history, state.prevPage)
            };
        }

        return {
            showsMenuButton: true,
            onButtonClick: this.toggleMenu
        };
    }

    componentDidMount() {
        const { auth } = this.props;
        const swiper = new Swiper(this.ref, this.showMenuSwipe, this.hideMenuSwipe);
        if (auth) {
            swiper.init();
        }
        this.swiper = swiper;
    }

    componentDidUpdate() {
        const { auth } = this.props;
        if (auth) {
            this.swiper.init();
            return;
        }
        this.swiper.destroy();
    }

    render() {
        const { children, pageTitle = '', pageLink = '', pageDesc = '' } = this.props;
        const { drawerOpened } = this.state;

        const wrapperStyle = classNames({
            'aucodi-content': true
        });

        const mainStyle = classNames({
            'aucodi-content__main aucodi-content__main--padding': true,
            'aucodi-content--transformed': drawerOpened
        });

        return (
            <div className={ wrapperStyle }>
                <Drawer visible={ drawerOpened } onItemClick={ this.hideMenu } />
                <div className="aucodi-content__wrap" ref={ ref => this.ref = ref }>
                    <Header 
                        visible={ true }
                        transparent={ drawerOpened }
                        pageLink={ pageLink }
                        onButtonClick={ this.toggleMenu }
                        showsMenuButton={ 1 }
                        title={ pageTitle }
                        description={ pageDesc }
                        { ...this.getHeaderProps() }
                    />
                    <main className={ mainStyle }>
                        { children }
                    </main>
                </div>
            </div>
        );
    }
}

export default Content;