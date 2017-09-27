import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayBar from './play_bar';

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBar));
