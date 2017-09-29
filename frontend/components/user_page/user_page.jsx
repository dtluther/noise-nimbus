import React from 'react';
// import { TrackIndexItem } from '../track_index/track_index_item';
import TrackIndexItemContainer from '../track_index/track_index_item_container';

class UserPage extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.username !== this.props.match.params.username) {
      this.props.fetchUser(newProps.match.params.username);
    }
  }


  render() {
    const tracks = this.props.tracks;
    const selectedUser = this.props.users.selectedUser;

    let tracksIndex;
    if (tracks.ids.length > 0) {
      tracksIndex = (
        <ul className="tracks-or-listens-list">
          {tracks.ids.map( id => (
            <TrackIndexItemContainer key={`trackli-${id}`} tracks={tracks} track={tracks.byIds[id]} selectedUser={selectedUser}/>
          ))}
        </ul>
      );
    } else {
      tracksIndex = <h1>You have no songs! Why don't you upload some or check out the stream page?</h1>;
    }

    // will add this later
    // <a className="receently-listened-to">Recently Listened To</a>
    return (
      <div className="user-page">
        <div className="user-header-box">
          <section className="user-header">
            <div className="user-image-container">
              <img className="user-image" height="200px" width="200px"
                src={selectedUser.image_url} />
            </div>
            <h1>{this.props.users.selectedUser.username}</h1>
          </section>
        </div>

        <section className="tracks-or-listens">
          <div className="tracks-or-listens-links">
            <a className="my-tracks">My Tracks</a>
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
