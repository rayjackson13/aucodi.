import { connect } from 'react-redux';
import Content from 'modules/Content';

const mapStateToProps = ({ content }) => ({
    pageTitle: content.title,
    pageDesc: content.description,
    pageLink: content.page
});

export default connect(mapStateToProps)(Content);