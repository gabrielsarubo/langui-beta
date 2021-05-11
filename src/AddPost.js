import React, { Component } from 'react';
import { Modal } from "bootstrap";

class AddPost extends Component {
  state = {
    title: '',
    desc: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addPost(this.state)

    // empty the state
    this.setState({
      title: '',
      desc: ''
    })
  }

  render() {
    return (
      <div className="modal fade" id="modalNewPost" tabIndex="-1" aria-labelledby="modalNewPostLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalNewPostLabel">Novo Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input type="text" id="title" className="form-control" onChange={this.handleChange} value={this.state.title} placeholder="Título do post" />
              </div>

              <div className="mb-3">
                <textarea id="desc" rows="4" className="form-control" onChange={this.handleChange} value={this.state.desc} placeholder="Comece a escrever..." ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;