import HeaderTitle from '../../components/HeaderTitle';

const Profile = () => {
  const profileData = {
    name: 'Gabriel Sousa',
    email: 'gabrielsaubo@hotmail.com',
    password: 'abcd1234'
  }

  const { name, email, password } = profileData

  return (
    <div className="Profile container">
      <h1 className="mb-4">Perfil</h1>

      <div className="mb-2">
        <label className="form-label">Nome</label>
        <input type="name" id="name" className="form-control" value={name} placeholder="Seu nome" readOnly disabled />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input type="email" id="email" className="form-control" value={email} placeholder="Seu email" readOnly disabled />
      </div>
      <div className="mb-4">
        <label className="form-label">Senha</label>
        <input type="password" id="password" className="form-control" value={password} placeholder="Sua senha" readOnly disabled />
      </div>
      <hr />
      <button className="btn btn-dark">
      <i className="bi bi-box-arrow-left"></i>&nbsp;&nbsp;Desconectar</button>
    </div>
  );
}

export default Profile;