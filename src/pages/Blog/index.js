import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Firebase
import firebase from '../../config/firebase';
// Components
import Posts from '../../components/Posts';
import HeaderTitle from '../../components/HeaderTitle';
import Navbar from '../../components/Navbar';
// CSS
import './index.css'

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {    
    let postList = []
    
    firebase.firestore().collection('posts').get()
      .then(res => {
        res.docs.forEach(doc => {          
          postList.push({
            // Get the document (post) id
            id: doc.id,
            // Get all the data inside the document
            ...doc.data()
          })
        });
        
        this.setState({
          posts: postList
        })
      })
  }

  render() {
    return (
      <div className="Blog">
        {/* fixed Navbar at the bottom of the page */}
        <Navbar />

        <main className="container">
          <HeaderTitle
            title='Blog'
            paragraph='Pratice writing every day to help you memorize the new words you learned.'
          />

          {/* Floating trigger button to open modal for creating a New Post */}
          <Link to='/addpost' >
            <button id="buttonNewPost" type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            </button>
          </Link>

          {/* Section for listing the Posts */}
          <section className="container my-3 px-0">
            <div className="row g-3 post-list">
              {/* List of cards of posts, Posts returns elements that look like this -> <div className="col-12 col-md-6"> */}
              <Posts posts={this.state.posts} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Blog;
