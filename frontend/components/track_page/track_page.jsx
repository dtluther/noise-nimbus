import React from 'react';
import Modal from 'react-modal';
import EditFormContainer from '../upload_page/edit_form_container';

// attributed to https://react.rocks/tag/Dropdown and https://github.com/instructure-react/react-menu
// import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-menus';
// const Menu = require('react-menu');
// const MenuTrigger = Menu.MenuTrigger;
// const MenuOptions = Menu.MenuOptions;
// const MenuOption = Menu.MenuOption;
//
// <Menu className='track-menu'>
//   <MenuTrigger>Test</MenuTrigger>
//   <MenuOptions>
//     <MenuOption>Option 1</MenuOption>
//     <MenuOption>Option 2</MenuOption>
//     <MenuOption>Option 3</MenuOption>
//   </MenuOptions>
// </Menu>



class TrackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editModalIsOpen: false
    };

    this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    this.handleCloseEditModal = this.handleCloseEditModal.bind(this);

  }

  componentWillMount(newProps) {
    this.props.fetchTrackByTitle(this.props.match.params.title);
  }

  componentDidReceiveProps(newProps) {
    if (newProps.match.params.title !== this.props.match.params.title) {
      this.props.fetchTrackByTitle(this.props.match.params.title);
    }
  }

  handleOpenEditModal() {
    this.setState({editModalIsOpen: true});
  }

  handleCloseEditModal() {
    this.setState({ editModalIsOpen: false });
    // this.props.clearTrackErrors();
  }

  editModal() {
    return (
      <div className="edit-button-modal">
        <button className="edit-button" onClick={this.handleOpenEditModal}>Edit</button>
        <Modal className="edit-modal"
          isOpen={this.state.editModalIsOpen}
          onAfterOpen={this.handleAfterOpenEditModal}
          onRequestClose={this.handleCloseEditModal}
          contentLabel="Edit Modal"
        >
          <div>
            <EditFormContainer handleCloseEditModal={this.handleCloseEditModal} />
          </div>

        </Modal>
      </div>
    );
  }

  handleEdit() {
    return e => {
      e.preventDefault();

    };
  }

  handleDelete() {
    return e => {
      e.preventDefault();
      this.props.deleteTrack(this.props.tracks.selectedTrack.id)
        .then(() => this.props.history.push(`/users/${this.props.tracks.selectedTrack.username}`));
    };
  }
  render() {
    console.log('track page props', this.props);
    return (
      <div className="tracks-page">
        <section className="track-header">
          <div className="play-details-flexbox">
            <div className="track-header-play-button-box">
              <i className="track-header-play fa fa-play-circle fa-5x" aria-hidden="true"></i>
            </div>
            <div className="track-header-details">
              <h3 className="track-header-username">{this.props.tracks.selectedTrack.username}</h3>
              <h2 className="track-header-title">{this.props.tracks.selectedTrack.title}</h2>
            </div>
          </div>
          <div className="track-profile-image-box">
            <img className="track-profile-image" src={this.props.tracks.selectedTrack.user_image_url} />
          </div>
          <div className="track-waveform-box">
            <img className="track-waveform" src="https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default-wave-form.png" />
          </div>

        </section>

        <section className="track-comments">
          <h1>This section will display and add comments</h1>
          {this.editModal()}
          <button onClick={this.handleDelete()}>Delete</button>
        </section>
      </div>
    );
  }
}

export default TrackPage;
