import React from 'react';
import { Link } from 'react-router-dom';

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
    const author = this.props.comment.author;
    const authorImage = this.props.comment.authorImage;
    return (
      <li className="comment-index-item">
        <div className="comment-user-body">
          <img src={authorImage} />
          <div className="author-comment">
            <Link id="author" to={`/users/${author}`}>{author}</Link>
            <h1 id="body">{this.props.comment.body}</h1>
          </div>
        </div>
        <div className="comment-delete-button-box">
          <i onClick={this.handleDelete()} className="comment-delete-button fa fa-trash fa-2x" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}


export default CommentIndexItem;
