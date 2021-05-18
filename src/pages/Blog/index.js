import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    posts: [],
    search: '',
    dateFilters: {all: true, today: false}
  }

  componentDidMount() {    
    let postList = []
    
    firebase.firestore().collection('posts').where('userEmail', '==', this.props.userEmail).get()
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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value.toString().toLowerCase()
    })
  }

  handleFilter = e => {
    if (e.target.id === 'dateFilters-all') {
      this.setState({
        dateFilters: {all: true, today: false}
      })
    } else if (e.target.id === 'dateFilters-today') {
      this.setState({
        dateFilters: {all: false, today: true}
      })
    }
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

          {/* Search bar */}
          <div className="row mb-4">
            <div className="input-group">
              <span className="input-group-text" id="search-addon"><i className="bi bi-search"></i></span>
              <input type="text" id="search" className="form-control py-2" onChange={this.handleChange} placeholder="Pesquisar por título.." aria-describedby="search-addon" />
            </div>
          </div>

          {/* Filter tags */}
          <div className="d-flex flex-row mb-4">
            <div className="me-2">
              <input type="radio" className="btn-check" name="options-dateFilters" id="dateFilters-all" onChange={this.handleFilter} checked={this.state.dateFilters.all} />
              <label className="btn btn-sm btn-outline-secondary" htmlFor="dateFilters-all">Todos</label>
            </div>
            <div className="me-2">
              <input type="radio" className="btn-check" name="options-dateFilters" id="dateFilters-today" onChange={this.handleFilter} checked={this.state.dateFilters.today} />
              <label className="btn btn-sm btn-outline-secondary" htmlFor="dateFilters-today">Hoje</label>
            </div>
          </div>

          {/* Floating trigger button to open modal for creating a New Post */}
          <Link to='/addpost' >
            <button id="buttonNewPost" type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            </button>
          </Link>

          {/*Name Section for listing the Posts */}
          <section className="container mb-3 px-0">
            <div className="row g-3 post-list">
              {/* List of cards of posts, Posts returns elements that look like this -> <div className="col-12 col-md-6"> */}
              <Posts posts={this.state.posts} search={this.state.search} dateFilters={this.state.dateFilters} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

// Get the state from the store // alternative to useSelector()
const mapStateToProps = state => ({
  userEmail: state.userEmail
});

export default connect(
  mapStateToProps,
)(Blog);
