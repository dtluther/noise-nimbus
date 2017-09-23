import { connect } from 'react-redux';
import UploadPage from './upload_page';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    currentUser: state.session.currentUser
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    createTrack: track => dispatch(createTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(UploadPage);
