import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);


  }

  handleDelete() {
    return e => {
      e.preventDefault();
      const idInt = parseInt(this.props.comment.id);
      this.props.deleteComment(idInt);
    };
  }
  render() {
    const author = this.props.currentUser.username;
    const authorImage = this.props.currentUser.image_url;
    const commentBody = this.props.comment.body;
    console.log('inside comment index item', this.props);
    return (
      <li className="comment-index-item">
        <div className="comment-user-body">
          <img src={authorImage} />
          <h1>{author}</h1>
          <h1>{commentBody}</h1>
        </div>
        <div className="comment-delete-button-box">
          <i onClick={this.handleDelete()} className="comment-delete-button fa fa-trash fa-1x" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}


export default CommentIndexItem;
