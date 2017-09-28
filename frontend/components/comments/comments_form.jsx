import React from 'react';
import CommentIndexItem from './comment_index/item';

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
    console.log('state in comments submit', this.state);
    this.props.postComment(this.state);
  }

  render() {
    const commentsArray = this.props.commments.commentIds.map(
      id => (this.props.comments.byIds[id]));
    debugger;
    const commentsIndex = (
      <ul className="commentsIndex">
        {commentsArray.reverse().map(
          comment => <CommentIndexItem />
        )}
      </ul>
    );
    const currentUserImage = this.props.currentUser.image_url;
    console.log('props in comments form', this.props);
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
          {commentsIndex}
        </div>
      </div>
    );
  }

}

export default CommentsForm;
