import React from 'react';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const currentUserImage = this.props.currentUser.image_url;
    console.log('props in comments form', this.props);
    return (
      <div className="comments-box">
        <div className="comments-input-box">
          <form className="comment-input-form">
            <img className="comments-user-image" src={currentUserImage} />
            <input className="comment-input"
              placeholder="Add Comment..."/>
          </form>
        </div>
      </div>
    );
  }

}

export default CommentsForm;
