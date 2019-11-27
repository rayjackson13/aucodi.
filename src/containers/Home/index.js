import { connect } from 'react-redux';
import Home from 'modules/Home';

const mapStateToProps = ({ audio }) => ({
    tracks: audio.tracks
});

export default connect(mapStateToProps)(Home);

