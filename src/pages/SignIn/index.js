import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../config/firebase";
import 'firebase/auth'
import './index.css';
import Logo from '../../assets/brand/langui-logo.svg';

const SignIn = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    // Authenticate sign in using Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        // console.log(res);
        setIsAuthenticated(true)
      })
      .catch(err => {
        // console.log(err);
        setIsAuthenticated(false)
      })
  }

  return (
    // Container for the entire sign component
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <img src={Logo} alt="" />
        </div>
        <h1 className="h3 mb-4">Entre na sua conta</h1>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Seu email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Sua senha" required />
        </div>

        {isAuthenticated === undefined && null}
        {isAuthenticated === true && (<div className="feedback-alert text-center text-success mb-4">Bem-vindo de volta!</div>)}
        {isAuthenticated === false && (<div className="feedback-alert text-center text-danger mb-4">Credenciais inválidas!</div>)}

        <button type="submit" className="btn btn-primary w-100"
          disabled={(!(email !== '' && password !== '')) || (false)}>
          Entrar
          </button>
        <p className="mt-3 mb-0 text-muted text-center">
          Não tem conta?&nbsp;
            <Link to='/signup'>Crie uma agora</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;