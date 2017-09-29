import React from 'react';
import { Link } from 'react-router-dom';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTracks();
  }

  stream() {


  }

  render() {

    let tracks;
    if (this.props.tracks.ids.length > 0) {
        let trackObjs = this.props.tracks.byIds;
        tracks = (
        <div className="stream-page">
          <ul className="tracks-ul">
            {
              this.props.tracks.ids.map(id => (
                <li key={`stream-track-li-${id}`}>
                  <img className="stream-user-img" src={trackObjs[id].user_image_url} />
                  <Link className="stream-title" to={`/tracks/${trackObjs[id].title}`}>{trackObjs[id].title}</Link>
                  <Link className="stream-artist" to={`/users/${trackObjs[id].username}`}>{trackObjs[id].username}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      );
    } else {
      tracks = <h1>Uh-oh, where did all the songs go?</h1>;
    }

    return (
      <div>
        {tracks}
      </div>
    );
  }
}

export default StreamPage;
