import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPage as setPageInfo } from 'actions/content';

const Wrapper = props => {
    const { 
        children, 
        location: { pathname }, 
        setPageInfo, 
        page, 
        pageTitle,
        pageDesc
    } = props;

    useEffect(() => {
        if (page.link !== pathname) {
            console.log(pageDesc);
            const newPage = {
                page: pathname,
                prevPage: page.link,
                title: pageTitle,
                description: pageDesc
            };
            setPageInfo(newPage);
        }
    }, [ page, pageDesc, pageTitle, pathname, setPageInfo ]);

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