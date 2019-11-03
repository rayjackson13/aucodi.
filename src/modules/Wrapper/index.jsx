import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPage as setPageInfo } from 'actions/content';

const Wrapper = props => {
    const { 
        children, 
        auth, 
        location: { pathname }, 
        setPageInfo, 
        page, 
        pageTitle,
        profileData,
        profileLoading,
        profileError,
        getProfile,
        logout
    } = props;

    useEffect(() => {
        if (page.link !== pathname) {
            const newPage = {
                page: pathname,
                prevPage: page.link,
                title: pageTitle
            };
            setPageInfo(newPage);
        }
    }, [ page, pageTitle, pathname, setPageInfo ]);

    return children;
};

const mapStateToProps = ({ content }) => ({
    page: {
        link: content.page,
        prevPage: content.prevPage
    }
});

const mapDispatchToProps = {
    setPageInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);