import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { omnisearch } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchedTracks: state.searchedTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    omnisearch: query => dispatch(omnisearch(query))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
