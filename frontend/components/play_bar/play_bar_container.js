import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayBar from './play_bar';

const mapStateToProps = state => {
  return {
    playBarState: state
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
