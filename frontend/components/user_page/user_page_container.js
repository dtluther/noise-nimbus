import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => {
  console.log('USER ownprops', ownProps);
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  null
)(UserPage);
