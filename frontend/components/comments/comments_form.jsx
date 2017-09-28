import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      track_id: this.props.selectedTrack.id
    };
  }

  componentWillMount() {
    console.log('state in component will mount', this.state);
    this.props.fetchComments(this.state.track_id);
  }
  //
  componentWillReceiveProps(nextProps) {
    console.log('comment form this.props', this.props);
    console.log('comment form nextProps', nextProps);
    if (nextProps.selectedTrack.id !== this.props.selectedTrack.id) {
      this.props.fetchComments(nextProps.selectedTrack.id);
      this.setState(({ track_id: nextProps.selectedTrack.id }));

    }
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postComment(this.state);
  }

  render() {
    let commentsArray;
    if (this.props.comments.commentIds.length > 1) {
      console.log(this.props.comments);
      commentsArray = this.props.comments.commentIds.map(
        id => (this.props.comments.byIds[id]));
    } else {
      commentsArray = [];
    }

    const commentsIndex = (
      <ul className="commentsIndex">
        {commentsArray.reverse().map(
          comment => <CommentIndexItem key={`comment${comment.id}`}
                      comment={comment}
                      currentUser={this.props.currentUser}
                      deleteComment={this.props.deleteComment}
                      />
        )}
      </ul>
    );
    const currentUserImage = this.props.currentUser.image_url;
    const artistImage = this.props.selectedTrack.user_image_url;
    return (
      <div className="comments-box">
        <div className="comments-input-box">
          <form className="comment-input-form" onSubmit={this.handleSubmit.bind(this)}>
            <img className="comments-user-image" src={currentUserImage} />
            <input className="comment-input"
              onChange={this.update('body')}
              type="text"
              placeholder="Add Comment..."/>
          </form>
        </div>
        <div className="comments-index-box">
          <div className="comment-artist-image-box">
            <img className="comment-artist-image" src={artistImage} />
          </div>
          <div className="comments-index-item-box">
            {commentsIndex}
          </div>
        </div>
      </div>
    );
  }

}

export default CommentsForm;
