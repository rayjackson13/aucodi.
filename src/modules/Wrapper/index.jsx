import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPage as setPageInfo } from 'actions/content';
import { isLoginScreen } from 'helpers/locations';

const Wrapper = props => {
    const { 
        children, 
        auth,
        location: { pathname }, 
        setPageInfo, 
        page, 
        pageTitle,
        pageDesc
    } = props;

    useEffect(() => {
        if (page.link !== pathname) {
            const newPage = {
                page: pathname,
                prevPage: page.link,
                title: pageTitle,
                description: pageDesc
            };
            setPageInfo(newPage);
        }
    }, [ page, pageDesc, pageTitle, pathname, setPageInfo ]);

    if (!auth && !isLoginScreen(pathname)) {
        return (
            <Redirect to="/auth" />
        );
    }

    return children;
};

const mapStateToProps = ({ content, auth }) => ({
    auth: auth.token,
    page: {
        link: content.page,
        prevPage: content.prevPage
    }
});

const mapDispatchToProps = {
    setPageInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);