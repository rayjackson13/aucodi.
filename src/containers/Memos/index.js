import { connect } from 'react-redux';
import Memos from 'modules/Memos';
import { getTracks, pushTrack } from 'actions/audio';

const mapStateToProps = ({ audio }) => ({
    tracks: audio.tracks 
});

const mapDispatchToProps = { 
    getTracks,
    pushTrack
};

export default connect(mapStateToProps, mapDispatchToProps)(Memos);

