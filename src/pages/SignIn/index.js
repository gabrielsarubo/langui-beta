import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/brand/langui-logo.svg';

class SignIn extends Component {
  state = {
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
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <img src={Logo} alt="" />
          </div>
          <h1 className="h3 mb-4">Entre na sua conta</h1>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" onChange={this.handleChange} placeholder="Seu email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" id="password" className="form-control" onChange={this.handleChange} placeholder="Sua senha" required />
          </div>
          <button type="submit" className="btn btn-primary w-100" 
            disabled={(!(this.state.email !== '' && this.state.password !== '')) || (false)}>
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
}

export default SignIn;