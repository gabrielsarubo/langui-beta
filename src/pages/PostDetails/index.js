import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from "../../config/firebase";

const PostDetails = ({ history, match }) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    firebase.firestore().collection('posts').doc(match.params.idPost).get()
      .then(res => {
        setPost(res.data())
      })
  }, [match.params.idPost])

  const handleDismiss = () => {
    history.goBack()
  }

  return (
    <div className="PostDetails container">
      <h1 className="my-4 text-center">Ver Post</h1>

      <form>
        <div className="mb-3">
          <input type="text" id="title" className="form-control" defaultValue={post.title} placeholder="Título do post" readOnly />
        </div>

        <div className="mb-3">
          <textarea id="desc" rows="6" className="form-control" defaultValue={post.description} placeholder="Comece a escrever..." readOnly ></textarea>
        </div>

        <div className="fixed-bottom mb-3 mx-3 d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary" onClick={handleDismiss} >Voltar</button>
          <button type="submit" className="btn btn-primary" disabled>Editar</button>
        </div>
      </form>
    </div>
  );
}

export default PostDetails;