import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => {
  console.log('USER state', state);
  console.log('USER ownprops', ownProps);
  return {
    currentUser: state.session.currentUser,
    entities: state.entities
  };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  null
)(UserPage);
