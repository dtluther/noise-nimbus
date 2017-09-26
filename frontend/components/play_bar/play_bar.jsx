import React from 'react';
// Attributed to https://github.com/CookPete/react-player
import ReactPlayer from 'react-player';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // hidden: true,
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 9,
      playbackRate: 1.0,
      width: 600,
      height: 50
    };
  }

  load() {
    return url => {
      this.setState({
        url,
        played: 0,
        loaded: 0
      });
    };
  }

  playPause() {
    this.setState({ playing: !this.state.playing });
  }
  stop() {
    this.setState({ url: null, playing: false });
  }
  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }
  toggleMuted() {
    this.setState({ muted: !this.state.muted });
  }
  setPlaybackRate(e) {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  }
  onPlay() {
    this.setState({ playing: true });
  }
  onPause() {
    this.setState({ playing: false });
  }
  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }
  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }
  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }
  onProgress(state) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }


  render() {
    const { url, playing, volume, muted, played, loaded, duration,
       playbackRate } = this.state;

    const playPauseIcon = playing === true ?
      ( <i className="fa fa-pause" aria-hidden="true"></i> ) :
      ( <i className="fa fa-play" aria-hidden="true"></i> );
    return (
      <div className="play-bar-div">
        <div className="player-wrapper">
          <ReactPlayer className="react-player"
            url="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/tracks/track_uploads/000/000/006/original/mindmapthat_-_Transmutation.mp3"
            width='100%'
            height='100%'
            playing={this.playing}
            playbackRate={this.playbackRate}
            volume={this.volume}
            muted={this.muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onStart={this.onPlay}
            onPause={this.onPause}
            onPause={this.onPause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={() => this.setState({ playing: false })}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={() => this.setState({ duration })}
          />
        </div>

        <div className="react-player-container">
          <div className="player-buttons">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
            {playPauseIcon}
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </div>

          <div className="player-progress-meter">
            {played}
            <progress max={1} value={played}></progress>
            {duration}
          </div>

          <div className="volume-track-queue">
            <i className="fa fa-volume-up" aria-hidden="true"></i>
            <h1>Track name goes here</h1>
            <i className="fa fa-list" aria-hidden="true"></i>

          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
