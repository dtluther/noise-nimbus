import React from 'react';

class UserPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('user page, this.props', this.props);
    return (
      <div className="user-page">
        <section className="user-header">
          <h1>{this.props.currentUser.username}</h1>
          <div className="user-image-container">
            <img className="user-image" height="200px" width="200px"
              src={this.props.currentUser.image_url} />
          </div>
        </section>

        <section className="tracks-or-listens">
          <div className="tracks-or-listens-links">
            <a className="my-tracks">My Tracks</a>
            <a className="receently-listened-to">Recently Listened To</a>
          </div>

          <div className="tracks-or-listens-index">
            <ul className="tracks-or-listens-list">
              <li>track1</li>
              <li>track2</li>
              <li>track3</li>
            </ul>
          </div>


        </section>
      </div>
    );
  }
}

export default UserPage;
