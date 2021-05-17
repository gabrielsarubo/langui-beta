import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from "../../config/firebase";

const AddPost = (props) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const userEmail = useSelector(state => state.userEmail)

  // Reference the Firestore database
  const db = firebase.firestore()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Save post to the database
    db.collection('posts').add({
      userEmail: userEmail,
      title: title,
      description: desc,
      creationDate: new Date(),
    })
      .then(res => {
        console.log('ok');
      })
      .catch(err => {
        console.log('not ok');
      })

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

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" id="title" className="form-control" onChange={e => { setTitle(e.target.value) }} placeholder="Título do post" required />
        </div>

        <div className="mb-3">
          <textarea id="desc" rows="6" className="form-control" onChange={e => { setDesc(e.target.value) }} placeholder="Comece a escrever..." required ></textarea>
        </div>

        <div className="fixed-bottom mb-3 mx-3 d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary" onClick={handleDismiss} >Cancelar</button>
          <button type="submit" className="btn btn-primary"
            disabled={(!(title !== '' && desc !== '')) || (false)}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;