import React from 'react';

class UserPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="user-page">
        <section className="user-header">
          <h1>User Header</h1>
        </section>

        <section className="tracks-or-listens">
          <div className="tracks-or-listens-links">
            <a className="my-tracks">My Tracks</a>
            <a classNAme="receently-listened-to">Recently Listened To</a>
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
