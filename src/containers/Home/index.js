import { connect } from 'react-redux';
import Folders from 'modules/Home';
import { getFolders } from 'actions/folders';

const mapStateToProps = ({ folders }) => ({
    folders: folders.data 
});

const mapDispatchToProps = {
    getFolders
};

export default connect(mapStateToProps, mapDispatchToProps)(Folders);

