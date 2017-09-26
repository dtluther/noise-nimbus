import React from 'react';
import { TrackIndexItem } from '../track_index/track_index_item';

class UserPage extends React.Component {
  constructor() {
    super();
  }

  componentWillMount(newProps) {
    // console.log('user page willmount props', this.props);
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    // console.log('user page will receive new props', newProps);
    if (newProps.match.params.username !== this.props.match.params.username) {
      this.props.fetchUser(newProps.match.params.username);
    }
  }

  render() {
    console.log('user page, this.props', this.props);
    const tracks = this.props.tracks;
    const selectedUser = this.props.users.selectedUser;

    let tracksIndex;
    if (tracks.ids.length > 0) {
      console.log('> 0', tracks.ids);
      tracksIndex = (
        <ul className="tracks-or-listens-list">
          {tracks.ids.map( id => (
            <TrackIndexItem track={tracks.byIds[id]} selectedUser={selectedUser}/>
          ))}
        </ul>
      );
    } else {
      console.log('0');
      tracksIndex = <h1>No songs here</h1>;
    }

    return (
      <div className="user-page">
        <section className="user-header">
          <h1>{this.props.users.selectedUser.username}</h1>
          <div className="user-image-container">
            <img className="user-image" height="200px" width="200px"
              src={selectedUser.image_url} />
          </div>
        </section>

        <section className="tracks-or-listens">
          <div className="tracks-or-listens-links">
            <a className="my-tracks">My Tracks</a>
            <a className="receently-listened-to">Recently Listened To</a>
          </div>

          <div className="tracks-or-listens-index">
            {tracksIndex}
          </div>


        </section>
      </div>
    );
  }
}

export default UserPage;
