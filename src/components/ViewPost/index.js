import React, { Component } from 'react';
import { Modal } from "bootstrap";

class ViewPost extends Component {
  constructor(props) {
    super(props)

    this.modal_viewPost = React.createRef()
    
    this.state = {
      postTitle: '',
      postDesc: '',
      modal: null
    }
  }

  componentDidMount() {
    this.setState({
      modal: new Modal(this.modal_viewPost.current)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // this.props.addPost(this.state)

    // empty the state
    // this.setState({
    //   postTitle: '',
    //   postDesc: ''
    // })

    // close modal manually
    this.state.modal.hide()
  }

  render() {
    return (
      <div className="modal fade" ref={this.modal_viewPost} id="modalViewPost" tabIndex="-1" aria-labelledby="modalViewPostLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalViewPostLabel">Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input type="text" id="postTitle" className="form-control" onChange={this.handleChange} value={this.state.postTitle} placeholder="Título do post" readOnly />
              </div>

              <div className="mb-3">
                <textarea id="postDesc" rows="4" className="form-control" onChange={this.handleChange} value={this.state.postDesc} placeholder="Comece a escrever..." readOnly ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => { this.props.deletePost(this.props.postId) }}>Apagar</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPost;