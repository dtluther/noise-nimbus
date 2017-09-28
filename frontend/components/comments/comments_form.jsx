import React from 'react';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    //
    // let commentsById = this.props.comments.byIds;
    // let arrComments;
    // let commentIds = this.props.comments.commentIds;
    // for (let i = 0; i < commentIds.length; i++) {
    //   arrComments.unshift(commentsById(commentIds[i]));
    // }

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      track_id: this.props.selectedTrack.id
      // arrComments
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

    }
    // if (nextProps.comments.commentIds.length !== this.props.comments.commentIds.length) {
    //   this.setState({ track_id: nextProps.selectedTrack.id });
    // }

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
      </div>
    );
  }

}

export default CommentsForm;
