import React, { useState } from 'react';
import firebase from "../../config/firebase";

const AddPost = (props) => {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // empty the state
    setTitle('')
    setDesc('')

    props.history.goBack()
  }

  const handleDismiss = () => {
    props.history.goBack()
  }

  return (
    <div className="AddPost container">
      <h1 className="my-4 text-center">Novo Post</h1>

      <div className="mb-3">
        <input type="text" id="title" className="form-control" onChange={e => {setTitle(e.target.value)}} placeholder="Título do post" />
      </div>

      <div className="mb-3">
        <textarea id="desc" rows="6" className="form-control" onChange={e => {setDesc(e.target.value)}} placeholder="Comece a escrever..." ></textarea>
      </div>

      <div className="fixed-bottom mb-3 mx-3 d-flex justify-content-between">
        <button type="button" className="btn btn-outline-secondary" onClick={handleDismiss} >Cancelar</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit} >Salvar</button>
      </div>
    </div>
  );
}

export default AddPost;