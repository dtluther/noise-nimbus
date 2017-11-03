import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.omnisearch(e.currentTarget.value)
        .then((results) => this.props.history.push('/stream'))
        .then(() => this.setState({ query: "" }));
    };
  }

  render() {
    const searchInputClass = this.props.searchInputClass;
    return (
      <form onSubmit={this.handleSubmit()} className="search-bar">
        <input className={searchInputClass}
          onChange={this.handleChange}
          type="text"
          value={this.state.query}
          placeholder="Search here..."

          />
      </form>
    );
  }
}

export default SearchBar;
