import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const postData = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.newPost(postData);
  }

  render() {
    // console.log("postData", this.props.posts);
    return (
      <div>
        <h1> Add Posts </h1>
        <br />
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label> Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.item
});

export default connect(mapStateToProps, { newPost })(PostForm);
