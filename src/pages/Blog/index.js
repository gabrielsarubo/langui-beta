import React, { Component } from 'react';
import AddPost from '../../components/AddPost';
import ViewPost from '../../components/ViewPost';
import Posts from '../../components/Posts';
import HeaderTitle from '../../components/HeaderTitle';
import './index.css'

class Blog extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Title of the post",
        date: "May 10",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id: 2,
        title: "Another title",
        date: "May 9",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ],
    currentPostId: null
  }

  addPost = post => {
    // TODO 
    // - get the id of the post from the database?
    // - revise the way it is getting the time
    post.id = Math.random()
    post.date = new Date().getTime()

    // create a new copy of posts while at same time adding a new post
    let posts = [...this.state.posts, post]

    // update the state in a non-destructive way
    this.setState({
      posts
    })
  }

  // Get the id of the post that was clicked, so the modal know which post to delete
  getPostId = id => {
    this.setState({
      currentPostId: id
    })
  }

  // Must be passed as a prop along with the id of the post
  // Receives an id of the post to be deleted
  deletePost = id => {
    let posts = this.state.posts.filter(post => {
      return post.id !== id
    })

    this.setState({
      posts
    })
  }

  render() {
    return (
      <div className="Blog container">
        <HeaderTitle
          title='Blog'
          paragraph='Pratice writing every day to help you memorize the new words you learned.'
        />

        {/* Floating trigger button to open modal for creating a New Post */}
        <button id="buttonNewPost" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNewPost">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>

        {/* New Post modal */}
        <AddPost addPost={this.addPost} />

        {/* VIew Post modal */}
        <ViewPost postId={this.state.currentPostId} deletePost={this.deletePost} />

        {/* Section for listing the Posts */}
        <section className="container my-3 px-0">
          <div className="row g-3 post-list">
            {/* List of cards of posts, Posts returns elements that look like this -> <div className="col-12 col-md-6"> */}
            <Posts posts={this.state.posts} getPostId={this.getPostId} />
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
