import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import StreamPage from './stream_page';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    tracks: state.entities.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamPage));
