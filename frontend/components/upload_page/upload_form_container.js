import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_form';
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

export default withRouter(connect(
  mapStateToProps,
  mapDistpatchToProps
)(UploadForm));
