import React, { Component } from 'react';

class ViewPost extends Component {
  // This state represents a single Post
  state = {
    id: 1,
    title: "Post Estatico",
    date: null,
    desc: "Some quick example text to build on the card title and make up the bulk of the cards content."
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="ViewPost container">
        <h1 className="h4 mb-4 text-center">Ver Post</h1>
        
        <div className="mb-3">
          <input id="title" type="text" className="form-control" value={this.state.title} onChange={this.handleChange} placeholder="Título do post" readOnly />
        </div>

        <div className="mb-3">
          <textarea id="desc" rows="5" className="form-control" value={this.state.desc} onChange={this.handleChange} placeholder="Comece a escrever..." readOnly ></textarea>
        </div>
      </div>
    );
  }
}

export default ViewPost;