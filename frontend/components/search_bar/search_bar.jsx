import React from 'react';

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className="search-bar">
//         <input className="search-input"
//           type="text"
//           placeholder="Search Bar (Display for now)"
//
//           />
//       </div>
//     );
//   }
// // }
//
// export default SearchBar;


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e) {
    // no default behavior for an input
    this.setState({ query: e.currentTarget.value });
    this.props.omnisearch(e.currentTarget.value);
  }

  render() {
    const searchInputClass = this.props.searchInputClass;
    return (
      <div className="search-bar">
        <input className={searchInputClass}
          onChange={this.handleChange}
          type="text"
          value={this.state.query}
          placeholder="For Display Only"

          />
      </div>
    );
  }
}

export default SearchBar;
