import React from 'react';
// Attributed to https://github.com/CookPete/react-player
import ReactPlayer from 'react-player';
import Duration from './duration';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      width: 600,
      height: 50
    };
  }

  componentWillReceiveProps(newProps) {
    console.log('newprops in willreceive playbar', newProps);
    console.log('state in willreceive playbar', this.state);
    let trackUrl = newProps.nowPlaying.currentTrack.track_upload_url;
    if (`https:${trackUrl}` !== this.state.url) {
      console.log('in the if statement')
      this.setState({
        url: trackUrl,
        played: 0,
        loaded: 0
      },
      this.onPlay()
    );
    console.log('after if statement', this.state)
    }
  }
  //   if (nowPlaying.isPlaying !== this.state.playing) {
  //     this.setState(
  //       { url: `https:${nowPlaying.currentTrack.track_upload_url}` },
  //         this.playPause()
  //     ); // make else if  statement for SELECT TRACK and play
  //   }
  // }

  stepBackward() {
    return () => {
      this.props.stepBackward();
    };
  }

  stepForward() {
    return () => {
      this.props.stepForward();
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
    return () => {
      if (this.state.url) {
        this.setState({ playing: !this.state.playing });
      }
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
      if (this.state.url) {
        this.setState({ playing: true });
      }
    };
  }

  onPause() {
    return () => {
      if (this.state.url) {
        this.setState({ playing: false });
      }
    };
  }

  onSeekMouseDown(value) {
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

  onProgress() {
    // We only want to update time slider if we are not currently seeking
    return state => {
      if (!this.state.seeking) {
        this.setState(state);
      }
    };
  }


  render() {
    // console.log('playbar render props', this.props);
    // console.log('playbar render state', this.state);

    const { url, playing, volume, muted, played, loaded, duration,
       playbackRate } = this.state;

    let trackArtist;
    let trackTitle;
    if (this.props.nowPlaying.currentTrack) {
      trackArtist = this.props.nowPlaying.currentTrack.username;
      trackTitle = this.props.nowPlaying.currentTrack.title;
    } else {
      trackArtist = null;
      trackTitle = null;
    }

    const playPauseIcon = playing === true ?
      ( <i onClick={this.onPause()} className="fa fa-pause" aria-hidden="true"></i> ) :
      ( <i onClick={this.onPlay()} className="fa fa-play" aria-hidden="true"></i> );

    return (
      <div className="play-bar-div">
        <div className="player-wrapper">
          <ReactPlayer className="react-player"
            url={url}
            width='100%'
            height='100%'
            playing={playing}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onStart={this.onPlay()}
            onPause={() => console.log('onPause')}
            onPause={this.onPause()}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={() => this.setState({ playing: false })}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress()}
            onDuration={(duration) => this.setState({ duration })}
          />
        </div>

        <div className="react-player-container">
          <div className="player-buttons">
            <i onClick={this.stepBackward()} className="fa fa-step-backward" aria-hidden="true"></i>
            {playPauseIcon}
            <i onClick={this.stepForward()} className="fa fa-step-forward" aria-hidden="true"></i>
          </div>

          <div className="player-progress-meter">
            {played}
            <progress max={1} value={played}></progress>
            {duration}
          </div>

          <div className="volume-track-queue">
            <i className="fa fa-volume-up" aria-hidden="true"></i>
            <input className="volume-slider"
              type="range"
              min="0"
              max="1"
              step="any"
              value={volume}
              onChange={this.setVolume()}></input>
            <div className="play-bar-details">
              <h1 className="play-bar-track-artist">{trackArtist}</h1>
              <h1 className="play-bar-track-title">{trackTitle}</h1>
            </div>
            <i className="fa fa-list" aria-hidden="true"></i>

          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
