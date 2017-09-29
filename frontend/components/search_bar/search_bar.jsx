import React from 'react';
import { Link } from 'react-router-dom';

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
  }

  // searchDropdown() {
  //   let foundTracks = this.props.searchedTracks;
  //
  //     return (
  //       <ul className="results">
  //         {
  //           foundTracks.map(trackObj => (
  //           <Link className="results-link" to={`/users/${trackObj.username}`}>
  //             <li className="results-item">
  //               <div>
  //                 <h2>{trackObj.title}</h2>
  //                 <h2>{trackObj.username}</h2>
  //               </div>
  //             </li>
  //         </Link>
  //           ))
  //         }
  //       </ul>
  //     );
  //
  //   // } else {
  //   //   console.log('hiii');
  //   // }
  // }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.omnisearch(e.currentTarget.value)
        .then(() => this.props.history.push('/stream'));
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
          placeholder="For Display Only"

          />
      </form>
    );
  }
}

export default SearchBar;
