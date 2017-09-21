import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-input"
          type="text"
          placeholder="Search Bar (Display for now)"
          />
      </div>
    );
  }
}

export default SearchBar;
