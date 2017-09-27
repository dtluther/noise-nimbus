import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayBar from './play_bar';
import { stepBackward, stepForward } from '../../actions/now_playing_actions';

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stepBackward: () => dispatch(stepBackward()),
    stepForward: () => dispatch(stepForward())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBar));
