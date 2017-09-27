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

  componentWillReceiveProps(newProps){
    console.log('newprops in playbar', newProps);
    let now = newProps.nowPlaying;
    this.setState(
      { url: `https:${now.currentTrack.track_upload_url}` },
      this.onPlay()
    );
    // let url = now.currentTrack.track_upload_url;
    // this.load();
    // this.onPlay();


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
    return () => {
      this.setState({ playing: !this.state.playing });
    };
  }

  stop() {
    return () => {
      this.setState({ url: null, playing: false });
    };
  }

  setVolume() {
    return e => {
      this.setState({ volume: parseFloat(e.target.value) });
    };
  }

  toggleMuted() {
    return e => {
      this.setState({ muted: !this.state.muted });
    };
  }

  setPlaybackRate() {
    return e => {
      this.setState({ playbackRate: parseFloat(e.target.value) });
    };
  }

  onPlay() {
    return () => {
      this.setState({ playing: true });
    };
  }

  onPause() {
    return () => {
      this.setState({ playing: false });
    };
  }

  onSeekMouseDown() {
    return e => {
      this.setState({ seeking: true });
    };
  }

  onSeekChange() {
    return e => {
      this.setState({ played: parseFloat(e.target.value) });
    };
  }

  onSeekMouseUp() {
    return e => {
      this.setState({ seeking: false });
      this.player.seekTo(parseFloat(e.target.value));
    };
  }
  // onProgress(state) {
  //   // We only want to update time slider if we are not currently seeking
  //   if (!this.state.seeking) {
  //     this.setState(state);
  //   }
  // }


  render() {
    console.log('playbar render props', this.props);
    console.log('playbar render state', this.state);

    const { url, playing, volume, muted, played, loaded, duration,
       playbackRate } = this.state;

    const playPauseIcon = playing === true ?
      ( <i onClick={this.playPause()} className="fa fa-pause" aria-hidden="true"></i> ) :
      ( <i onClick={this.playPause()} className="fa fa-play" aria-hidden="true"></i> );
    return (
      <div className="play-bar-div">
        <div className="player-wrapper">
          <ReactPlayer className="react-player"
            url={url}
            width='100%'
            height='100%'
            playing={this.state.playing}
            playbackRate={this.state.playbackRate}
            volume={this.state.volume}
            muted={this.state.muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onStart={this.state.onPlay}
            onPause={this.state.onPause}
            onPause={this.state.onPause}
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
