import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import trackPage from './track_page';

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    tracks: state.entities.tracks
  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(trackPage);
