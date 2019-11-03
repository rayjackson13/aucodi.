import { connect } from 'react-redux';
import Content from 'modules/Content';

const mapStateToProps = ({ content }) => ({
    pageTitle: content.title,
    pageLink: content.page
});

export default connect(mapStateToProps)(Content);