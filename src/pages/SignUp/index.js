import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/brand/langui-logo.svg';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      // Container for the entire sign component
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <img src={Logo} alt="" />
          </div>
          <h1 className="h3 mb-4">Crie uma conta</h1>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="name" id="name" className="form-control" onChange={this.handleChange} placeholder="Seu nome" required />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" onChange={this.handleChange} placeholder="Seu email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" id="password" className="form-control" onChange={this.handleChange} placeholder="Sua senha" required />
          </div>
          <button type="submit" className="btn btn-primary w-100" 
            disabled={(!(this.state.email !== '' && this.state.email !== '' && this.state.password !== '')) || (false)}>
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
}

export default SignUp;