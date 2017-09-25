import React from 'react';
import Modal from 'react-modal';
import UploadFormContainer from '../upload_page/upload_page';

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

  componentWillMount() {
    console.log('willmount props', this.props);
    this.props.fetchTrack(this.props.match.params.title);
  }

  componentWillReceiveProps() {
    this.props.fetchTrack(this.props.match.params.title);
  }

  handleOpenEditModal() {
    this.setState({editModalIsOpen: true});
  }

  handleCloseEditModal() {
    this.setState({ editModalIsOpen: false });
    this.props.clearTrackErrors();
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
            <UploadFormContainer />
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
      console.log(this.props);
    };
  }
  render() {
    console.log('track page props', this.props);
    return (
      <div className="tracks-page">
        <section className="track-header">
          <h1>This is the tracks page</h1>
          <h2 className="track-title">Song title: {this.props.match.params.title}</h2>
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
