import React from 'react';

class UserPage extends React.Component {
  constructor() {
    super();
  }

  componentWillMount(newProps) {
    console.log('user page willmount props', this.props);
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    console.log('user page will receive new props', newProps);
    if (newProps.match.params.username !== this.props.match.params.username) {
      // this.props.history.push(`/users/${this.props.match.params.username}`);
      this.props.fetchUser(newProps.match.params.username);
    }
  }

  render() {
    // console.log('user page, this.props', this.props);
    return (
      <div className="user-page">
        <section className="user-header">
          <h1>{this.props.users.selectedUser.username}</h1>
          <div className="user-image-container">
            <img className="user-image" height="200px" width="200px"
              src={this.props.users.selectedUser.image_url} />
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
