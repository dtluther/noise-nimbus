import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_form';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tracks: state.entities.tracks,
    currentUser: state.session.currentUser,
    formType: "edit",
    handleCloseEditModal: ownProps.handleCloseEditModal
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    updateTrack: track => dispatch(updateTrack(track)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDistpatchToProps
)(UploadForm));
