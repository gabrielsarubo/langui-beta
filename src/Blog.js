import React, { Component } from 'react';
import AddPost from './AddPost';
import Posts from './Posts';

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
    ]
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
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum. Nulla numquam sequi mollitia</p>

        {/* Trigger button for New post modal */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNewPost">
          Novo Post
        </button>

        {/* New Post modal */}
        <AddPost addPost={this.addPost} />

        {/* Search box */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-search-addon" />
          <button className="btn btn-outline-secondary" type="button" id="button-search-addon">Buscar</button>
        </div>

        <h4>Últimos posts</h4>

        <div className="container my-3 px-0">
          <div className="row g-3 post-list">
            {/* List of cards of posts, Posts returns elements that look like this -> <div className="col-12 col-md-6"> */}
            <Posts posts={this.state.posts} deletePost={this.deletePost} />
          </div>
        </div>

      </div>
    );
  }
}

export default Blog;
