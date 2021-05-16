import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/brand/langui-logo.svg';

const SignUp = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    console.log(name, email, password)
  }

  return (
    // Container for the entire sign component
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <img src={Logo} alt="" />
        </div>
        <h1 className="h3 mb-4">Crie uma conta</h1>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">Nome</label>
          <input type="name" id="name" className="form-control" onChange={e => { setName(e.target.value) }} placeholder="Seu nome" required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={e => { setEmail(e.target.value) }} placeholder="Seu email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" id="password" className="form-control" onChange={e => { setPassword(e.target.value) }} placeholder="Sua senha" required />
        </div>
        <button type="submit" className="btn btn-primary w-100"
          disabled={(!(name !== '' && email !== '' && password !== '')) || (false)}>
          Criar Conta
          </button>
        <p className="mt-3 mb-0 text-muted text-center">
          Já tem conta?&nbsp;
            <Link to='/signin'>Entre agora</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;