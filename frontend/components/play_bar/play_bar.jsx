import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onPlay: false,
      onPause: false,
      onEnded: false
    };
  }


  render() {
    return (
      <div className="play-bar-div">
        <h1>
          I am the play bar in the footer!!!
        </h1>

        <ReactAudioPlayer className="play-bar"
          src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/tracks/track_uploads/000/000/006/original/mindmapthat_-_Transmutation.mp3"
          controls="true"
          volume="0.5"

          >

        </ReactAudioPlayer>
      </div>
    );
  }
}

export default PlayBar;
